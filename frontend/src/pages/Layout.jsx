import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

export default function Layout(){
    return(
        <div className="p-[1.44rem]">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}