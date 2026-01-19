import {Navbar} from "./components/Navbar/Navbar.tsx";
import {linksNavbar} from "./components/data/nav-links.ts";
import {Link, type LinkProps} from "./components/Link/Link.tsx";
import {useState} from "react";
import {ProductCard} from "./components/ProductCard/ProductCard.tsx";
import type {IProduct} from "./components/ProductCard/model/IProduct.ts";
import {nanoid} from 'nanoid'
import {Wrapper} from "./components/Wrapper/Wrapper.tsx";
import {Button} from "./components/Button/Button.tsx";
import {ButtonColor} from "./components/Button/model/ButtonColor.ts";
import {ButtonForm} from "./components/Button/model/ButtonForm.ts";

export const App = () => {
    const [numberOfItemsInTheCart, setNumberOfItemsInTheCart] = useState(0);
    const addToCart = (): void => {
        setNumberOfItemsInTheCart(numberOfItemsInTheCart + 1);
        console.log(numberOfItemsInTheCart);
    }

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
        buttonTitle: 'Купить',
        addToCart: () => addToCart()
    }

    const gag = (): void => {
        console.log('Продукция');
    }

    return (
        <>
            <Navbar
                numberOfItemsInTheBasket={numberOfItemsInTheCart}>
                {linksNavbar.map((link: LinkProps) => (
                    <Link key={link.title}
                          href={link.href}
                          title={link.title}/>))}
            </Navbar>
            <Wrapper>
                <img
                    className='wrapper__image'
                    src='/images/first-wrapper/big-bird.webp'
                    alt='большая птичка'/>
                <div className='wrapper__information'>
                    <h1 className='wrapper__information__heading'>Реплики картин
                        от <span>Ink. House</span></h1>
                    <p className='wrapper__information__description'>Высокое
                        качество отрисовки на плотной бумаге или льняном холсте.
                        Редкие произведения, доступные цены.</p>
                    <Button color={ButtonColor.GREEN} view={ButtonForm.RECTANGLE} title='Продукция' actionOnClick={gag}/>
                </div>
            </Wrapper>
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