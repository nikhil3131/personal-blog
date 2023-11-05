import { Link } from "react-router-dom";

export default function MobileOverlay(){
    return(
        <div className="bg-blue-500 opacity-90 h-screen flex justify-center items-center">
            <div className="flex flex-col text-4xl font-bold text-white space-y-3">
                <Link to="/" className="hover:bg-blue-700">Home</Link>
                <Link to="">Articles</Link>
                <Link to="">Pages</Link>
                <Link to="">Faq</Link>
            </div>
        </div>
    )
}