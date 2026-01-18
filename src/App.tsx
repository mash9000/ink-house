import {Navbar} from "./components/Navbar/Navbar.tsx";
import {linksNavbar} from "./components/data/nav-links.ts";
import {Link, type LinkProps} from "./components/Link/Link.tsx";

export const App = () => {
    return (
        <>
            <Navbar
                numberOfItemsInTheBasket={3}
                children={linksNavbar.map((link: LinkProps) => <Link
                    key={link.href.href} href={link.href} title={link.title}/>)}/>
            <p>check</p>
        </>
    )
}