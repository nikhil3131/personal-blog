import SearchBar from "../components/searchBar/SearchBar";

export default function Landing(){
    return(
        <section>
            <div>
                {/* title */}
                <h1 className="font-black text-[#183B56] text-3xl sm:text-6xl text-center pt-[2.7rem] sm:pt-[6rem]">Read the most intresting articles</h1>

                {/* welcome text */}
                <p className="text-[#5A7184] pt-[1.5rem] sm:pt-[2.1rem] text-center">Welcome to nikhil's blog! Dive into a world of coding insights, tips, and adventures. Let's embark on this digital journey together.</p>

                {/* search bar */}
                <SearchBar/>

                {/* popular tags */}
                <div className="pt-[0.96rem]">
                    <span className="text-md font-bold text-[#5A7184]"><i>Popular Tags: </i></span>
                </div>
            </div>

            <div>
                
            </div>
        </section>
    )
}