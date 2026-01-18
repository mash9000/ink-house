import {Navbar} from "./components/Navbar/Navbar.tsx";
import {linksNavbar} from "./components/data/nav-links.ts";
import {Link, type LinkProps} from "./components/Link/Link.tsx";
import {ProductCard} from "./components/ProductCard/ProductCard.tsx";
import type {IProduct} from "./components/ProductCard/model/IProduct.ts";
import {nanoid} from 'nanoid'

export const App = () => {

    const product: IProduct = {
        id: nanoid(),
        image: {
            src: 'images/works/germany/2.webp',
            description: 'работа "Птенцы"'
        },
        ownerOrAuthor: 'Макс Рихтер',
        mainTitle: 'Птенцы',
        technology: 'Холст, масло',
        size: {
            width: 50,
            height: 80
        },
        price: {
            value: 14500,
            getViewOfCurrency(price: number): string {
                return new Intl.NumberFormat("ru").format(price) + ' руб'
            }
        },
        buttonTitle: 'Купить'
    }

    return (
        <>
            <Navbar
                numberOfItemsInTheBasket={3}>
                {linksNavbar.map((link: LinkProps) => (
                    <Link key={link.title}
                          href={link.href}
                          title={link.title}/>))}
            </Navbar>
            <ProductCard product={product}>
                <p className='product-card__description'>
                    <p className='product-card__description__technology'>{product.technology}</p>
                    <p className='product-card__description__size'>&nbsp;({product.size?.width}x{product.size?.height})</p>
                </p>
                <p className='product-card__price'>{product.price.getViewOfCurrency(product.price.value)}</p>
            </ProductCard>
        </>
    )
}