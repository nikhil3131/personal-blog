export default function SearchBar(){
    return(
        <section className="pt-[3.84rem]">
            <form className="flex flex-col sm:flex-row sm:items-center sm:p-2 sm:bg-white sm:rounded-lg sm:shadow-sm space-y-3 sm:space-y-0">
                <input type="text" placeholder="Search Article" className="w-full p-2 rounded-lg focus:outline-none shadow-md sm:shadow-none"/>
                <button type="submit" className="p-2 px-4 font-black bg-[#1565D8] hover:bg-blue-700 text-white rounded-lg">Search</button>
            </form>
        </section>
    )
}