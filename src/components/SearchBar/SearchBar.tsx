type SearchBarProps = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar:React.FC<SearchBarProps> = ({setSearch}) => {
    const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <div>
        <input onChange={(e) => handleInputOnchange(e)} type="text" placeholder="Search by product name..." className="my-2 w-[50%] px-2 py-3 rounded-xl border border-gray-500"/>
        </div>
    );
}
export default SearchBar;