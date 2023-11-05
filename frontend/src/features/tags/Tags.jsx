import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const colorPalette = ["#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#e6f598", "#abdda4", "#66c2a5", "#3288bd"]

export default function Tags(){
    const tags = useSelector((state)=>state.tags.tags)

    return(
        <div className='sm:flex sm:items-center sm:gap-3'>
            <span className="text-md font-bold text-[#5A7184]"><i>Popular Tags: </i></span>
            <div className='flex flex-wrap mt-2'>
                {tags.map((tag, index)=>{
                    const randomColor = Math.floor(Math.random()*8)
                    return(
                        <Link key={index} className="p-1 px-2 mr-3 mb-2 rounded-md" style={{backgroundColor:`${colorPalette[randomColor]}`}}>{tag}</Link>
                    )
                })}
            </div>
        </div>
    )
}