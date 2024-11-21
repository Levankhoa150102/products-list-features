import { ReactNode } from "react"

type ProductListLayoutProps = {
    children: ReactNode
}
const ProductListLayout:React.FC<ProductListLayoutProps> = ({ children }) => {
    return(
        <div className="w-full h-full gap-3 p-3 bg-background">
            <div className="flex items-center font-semibold ">
                <div>
                    <p>Name: Le Van Khoa</p>
                    <p>Position: Front-End Developer</p>
                </div>
            </div>
            <div className="text-center">
                    <h1 className="text-3xl font-bold">PRODUCT INFORMATION</h1>
                </div>
            <div>{children}</div>
        </div>
    )
}   

export default ProductListLayout