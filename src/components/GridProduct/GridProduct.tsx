import { ReactNode } from "react"

type GridProductProps = {
    children: ReactNode
}
const GridProduct:React.FC<GridProductProps> = ({children}) => {
    return(
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-5">
            {children}
        </div>
    )
}
export default GridProduct