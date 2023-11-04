import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

export default function Layout(){
    return(
        <div className="px-[1.44rem] sm:px-[3.42rem] lg:px-[9rem]">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}