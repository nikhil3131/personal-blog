import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MobileOverlay from './MobileOverlay';
import DesktopMenu from './DesktopMenu';


export default function Navbar(){
    const navigate = useNavigate();
    const [mobileMenuSelected, isMobileMenuSelected] = useState(false)


    return(
        <nav className="flex justify-between items-center py-[1.44rem] text-[#183B56]">
            {/* logo */}
            <h1 className="bg-gradient-to-b from-[#183B56] to-[#0D2436] text-transparent bg-clip-text font-black text-3xl inline-block cursor-pointer" onClick={()=> navigate("/")}>blog <div className="bg-blue-500 w-2 h-2 rounded-full inline-block -ml-1.5 mb-2"/> </h1>

            {/* mobile menu */}
            <span className='cursor-pointer relative z-50 md:hidden' onClick={()=> isMobileMenuSelected(!mobileMenuSelected)}>
                {!mobileMenuSelected ? <MenuIcon className='scale-125'/> : <CloseIcon className='scale-125'/>}
            </span>
            <div className='absolute left-0 right-0 top-0'>
                {mobileMenuSelected && <MobileOverlay/>}
            </div>

            {/* desktop menu bar */}
            <div className='hidden md:inline-block'>
                <DesktopMenu/>
            </div>
        </nav>
    )
}