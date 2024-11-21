import { useEffect, useState } from "react"
import Card from "./components/Card/Card"
import GridProduct from "./components/GridProduct/GridProduct"
import SearchBar from "./components/SearchBar/SearchBar"
import { Product } from "./constants/common"
import ProductListLayout from "./layouts/ProductListLayout"
import { ProductService } from "./services/ProductService"
import useDebounce from "./hooks/useDebounce"
import SpinLoading from "./components/Global/SpinLoading/SpinLoading"
import useInfiniteScroll from "./hooks/useInfiniteScroll"

function App() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500);

  const [limit, setLimit] = useState(20)
  const [skip, setSkip] = useState(0)

  //fetch data
  const {data, isLoading } = ProductService.GetProductsList(limit, skip)
  const {data:searchData} = ProductService.GetProductSearch(debouncedSearch)

  const [products, setProducts] = useState<Product[]>(data?.products || []);

  //Situation: when search action is done, the user remove all the input, the product list will be reseted to 20 first items.
  useEffect(() => {
    if(search.length > 0) {
      setLimit(20)
      setSkip(0)
      setProducts(data?.products || [])
    }
  },[search])
  
  //Situation: concat the new data to the existing product list
  useEffect(() => {
      setProducts([...products, ...(data?.products || [])]);
  }, [data]);


  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + limit);

  }
  useInfiniteScroll(handleLoadMore);

  return (
   <ProductListLayout>
    <h1 className="text-[25px] font-bold">Product Lists</h1>
    <SearchBar setSearch={setSearch}/>
    {searchData?.products?.length === 0 && <div className="text-center text-[25px] font-semibold mt-6">NO DATA</div>}
        <GridProduct>
          { search.length > 0 ? searchData?.products?.map((item: Product, index: number) => {
            return (
              <>
              <Card key={index} data={item}/>
              </>
            )
          }) :
          products?.map((item: Product, index: number) => {
            return (
              <>
              <Card key={index} data={item}/>
              </>
            )
          })

          }

        </GridProduct>
        {search.length <= 0 && isLoading && <SpinLoading />}
   </ProductListLayout>
  )
}
export default App
