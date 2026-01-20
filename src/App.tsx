import {Navbar} from "./components/Navbar/Navbar.tsx";
import {linksNavbar} from "./components/data/realization/nav-links.ts";
import {Link, type LinkProps} from "./components/Link/Link.tsx";
import {useState} from "react";
import {ProductCard} from "./components/ProductCard/ProductCard.tsx";
import {Wrapper} from "./components/Wrapper/Wrapper.tsx";
import {Button} from "./components/Button/Button.tsx";
import {ButtonColor} from "./components/Button/model/ButtonColor.ts";
import {ButtonForm} from "./components/Button/model/ButtonForm.ts";
import {Footer} from "./components/Footer/Footer.tsx";
import {
    SocialNetworkLink, type SocialNetworkLinkProps
} from "./components/SocialNetworkLink/SocialNetworkLink.tsx";
import {ReviewWorks} from "./components/ReviewWorks/ReviewWorks.tsx";
import {Products} from "./components/data/realization/Products.ts";
import type {IProduct} from "./components/ProductCard/model/IProduct.ts";
import {
    RepositoryOfAllCountriesFromWorks
} from "./components/data/realization/RepositoryOfAllCountriesFromWorks.ts";

export const App = () => {
    const [numberOfItemsInTheCart, setNumberOfItemsInTheCart] = useState(0);
    const addToCart = (): void => {
        setNumberOfItemsInTheCart(numberOfItemsInTheCart + 1);
        console.log(numberOfItemsInTheCart);
    }

    const products = new Products(addToCart);

    const productions = (): void => {
        console.log('Продукция');
    }

    const review = (): void => {
        console.log('Ознакомиться');
    }

    const socialNetworks: SocialNetworkLinkProps[] = [
        {
            href: new URL('http://localhost:5173/'),
            imageSrc: '/images/social-networks/instagram.svg',
            imageDesc: 'перейти на Instagram'
        },
        {
            href: new URL('http://localhost:5173/'),
            imageSrc: '/images/social-networks/meta.svg',
            imageDesc: 'перейти на Meta'
        },
        {
            href: new URL('http://localhost:5173/'),
            imageSrc: '/images/social-networks/youtube.svg',
            imageDesc: 'перейти на YouTube'
        },
    ];

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
                    src='/images/wrappers/welcome/big-bird.webp'
                    alt='большая птичка'/>
                <div className='wrapper__information'>
                    <h1 className='wrapper__information__heading'>Реплики картин
                        от <span>Ink. House</span></h1>
                    <p className='wrapper__information__description'>Высокое
                        качество отрисовки на плотной бумаге или льняном холсте.
                        Редкие произведения, доступные цены.</p>
                    <Button color={ButtonColor.GREEN}
                            view={ButtonForm.RECTANGLE} title='Продукция'
                            actionOnClick={productions}/>
                </div>
            </Wrapper>
            <ReviewWorks
                countries={new RepositoryOfAllCountriesFromWorks(products).getProducts()}>
                {products.getProducts().map((product: IProduct) => (
                    <ProductCard key={product.mainTitle} product={product}>
                        <div className='product-card__description'>
                            <p className='product-card__description__technology'>{product.technology}</p>
                            <p className='product-card__description__size'>&nbsp;({product.size?.width}x{product.size?.height})</p>
                        </div>
                        <p className='product-card__price'>{product.price.getViewOfCurrency(product.price.value)}</p>
                    </ProductCard>
                ))}
            </ReviewWorks>
            <Wrapper>
                <div className='custom-wrapper-promo'>
                    <div className='custom-wrapper-promo__heading'>Новая
                        коллекция
                        французских авторов
                    </div>
                    <p className='custom-wrapper-promo__description'>Сложно
                        сказать,
                        почему акционеры крупнейших компаний призывают нас к
                        новым свершениям, которые, в свою очередь, должны быть
                        заблокированы в рамках своих собственных рациональных
                        ограничений. </p>
                    <p className='custom-wrapper-promo__description'>Принимая во
                        внимание показатели успешности, граница обучения кадров
                        предопределяет высокую востребованность направлений
                        прогрессивного развития.</p>
                    <Button color={ButtonColor.SAND}
                            view={ButtonForm.RECTANGLE}
                            title='Ознакомиться'
                            actionOnClick={review}
                            customStyles={{marginTop: '40px'}}/>
                </div>
            </Wrapper>
            <Wrapper>
                <div className='our-team'>
                    <img
                        className='our-team__image'
                        src='/images/wrappers/our-team/brushes.webp'
                        alt='изображений художественных кистей'/>
                    <div className='our-team__information'>
                        <h1 className='our-team_information__heading'>Наша
                            команда</h1>
                        <p className='our-team__information__description'>Значимость
                            этих проблем
                            настолько очевидна, что базовый вектор развития
                            позволяет оценить значение экспериментов, поражающих
                            по
                            своей масштабности и грандиозности. Мы вынуждены
                            отталкиваться от того, что консультация с широким
                            активом.</p>
                        <div className='our-team__information__artists'>
                            <a className='our-team__information__artists__link our-team__information__artists__link--1'
                               href='http://localhost:5173/'
                               target='_blank'></a>
                            <a className='our-team__information__artists__link our-team__information__artists__link--2'
                               href='http://localhost:5173/'
                               target='_blank'></a>
                            <a className='our-team__information__artists__link our-team__information__artists__link--3'
                               href='http://localhost:5173/'
                               target='_blank'></a>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Footer>
                {socialNetworks.map((socialNetwork: SocialNetworkLinkProps) => (
                    <SocialNetworkLink {...socialNetwork}/>
                ))}
            </Footer>
        </>
    )
}