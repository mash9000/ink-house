import './navbar/navbar.scss';
import './navbar/__elements/navbar__elements.scss';

import type {FC, ReactNode} from "react";
import {MainHomeLink} from "../MainHomeLink/MainHomeLink.tsx";
import {Cart} from "../Cart/Cart.tsx";

interface NavbarProps {
    children: ReactNode;
    numberOfItemsInTheBasket: number;
}

export const Navbar: FC<NavbarProps> = ({
                                            children,
                                            numberOfItemsInTheBasket
                                        }) => {
    return (
        <nav className="navbar">
            <div className="navbar__elements">
                <MainHomeLink/>
                {children}
                <Cart numberOfItemsInTheBasket={numberOfItemsInTheBasket}/>
            </div>
        </nav>
    );
}