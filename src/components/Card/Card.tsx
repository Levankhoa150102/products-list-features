import { Product } from "../../constants/common"

type CardProps = {
    data: Product
}
const Card:React.FC<CardProps> = ({data}) => {
    return(
        <div className="p-2 shadow-lg w-fit max-w-[400px] h-fit rounded-lg cursor-pointer">
            <img src={data?.images[0] ?? ''} alt="product" className="object-contain rounded-lg w-[400px] h-[200px] shadow-sm"/>
            <div className="p-2">
                <h1 className="text-lg font-bold line-clamp-1">{data?.title}</h1>
                <p className="text-sm line-clamp-2">{data?.description}</p>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">Price: ${data?.price}</p>
                </div>
                <button className="w-full px-3 py-2 mt-2 font-semibold text-white bg-red-600 rounded-lg hover:opacity-50">Add to cart</button>
            </div>
            
        </div>
    )
}
export default Card;