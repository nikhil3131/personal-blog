import { Link } from "react-router-dom";

export default function MobileOverlay(){
    return(
        <div className="bg-blue-500 opacity-80 h-screen flex justify-center items-center">
            <div className="flex flex-col text-4xl font-bold text-white space-y-3">
                <Link to="">Home</Link>
                <Link to="">Articles</Link>
                <Link to="">Pages</Link>
                <Link to="">Pricing</Link>
                <Link to="">Faq</Link>
                <Link to="">Sign in</Link>
            </div>
        </div>
    )
}