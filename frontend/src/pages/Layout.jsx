import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <div>
            navbar
            <main>
                <Outlet/>
            </main>
        </div>
    )
}