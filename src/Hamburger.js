import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
function Hamburger() {
    const [open,setOpen]=useState(true)
    const handleClick=()=>{
        setOpen(false)
    }
    return (
        <div>
            <HamburgerMenu
    isOpen={open}
    menuClicked={handleClick}
    width={18}
    height={15}
    strokeWidth={1}
    rotate={0}
    color='black'
    borderRadius={0}
    animationDuration={0.5}
>Hello guys</HamburgerMenu>
        </div>
    )
}

export default Hamburger
