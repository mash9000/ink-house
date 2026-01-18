import './navbar/navbar.scss';
import './navbar/__elements/navbar__elements.scss';

import type {FC, ReactNode} from "react";
import {MainHomeLink} from "../MainHomeLink/MainHomeLink.tsx";
import {Basket} from "../Basket/Basket.tsx";

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
                <Basket numberOfItemsInTheBasket={numberOfItemsInTheBasket}/>
            </div>
        </nav>
    );
}