import React, { useEffect, useState } from 'react'
import { NavBarItem } from '../navBarItem'
import navBarStyle from '../navBar/navbarStyle.module.scss'

export const NavBar = ({ shouldScrollNav }) => {

    const [isScrollNav, setIsScrollNav] = useState();
    useEffect(() => {
        setIsScrollNav(shouldScrollNav);
    }, [shouldScrollNav, isScrollNav])

    return (
        <div className={isScrollNav ? navBarStyle.sticky : navBarStyle.menu}>
            <div className={navBarStyle.itemsHome}>
                <NavBarItem>Home</NavBarItem>
            </div>
            <div className={navBarStyle.items}>
                <NavBarItem>All Categories</NavBarItem>
            </div>
            <div className={navBarStyle.items}>
                <NavBarItem>Men Clothing</NavBarItem>
            </div>
            <div className={navBarStyle.items}>
                <NavBarItem>Women Clothing</NavBarItem>
            </div>
            <div className={navBarStyle.items}>
                <NavBarItem>Jewelery</NavBarItem>
            </div>
            <div className={navBarStyle.items}>
                <NavBarItem>Electronics</NavBarItem>
            </div>

        </div>


    )
}