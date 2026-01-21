import {Navbar} from "./components/Navbar/Navbar.tsx";
import {linksNavbar} from "./data/realization/nav-links.ts";
import {Link, type LinkProps} from "./components/Link/Link.tsx";
import {Wrapper} from "./components/Wrapper/Wrapper.tsx";
import {Button} from "./components/Button/Button.tsx";
import {ButtonColor} from "./components/Button/model/ButtonColor.ts";
import {ButtonForm} from "./components/Button/model/ButtonForm.ts";
import {Footer} from "./components/Footer/Footer.tsx";
import {
    SocialNetworkLink, type SocialNetworkLinkProps
} from "./components/SocialNetworkLink/SocialNetworkLink.tsx";
import {socialNetworks} from "./data/realization/social-networks.ts";
import type {
    IModelOfGoodsStorage
} from "./data/model/IModelOfGoodsStorage.ts";
import {
    StandardProductModel
} from "./data/realization/StandardProductModel.ts";
import {ReviewWorks} from "./components/ReviewWorks/ReviewWorks.tsx";
import type {
    IProductDescription
} from "./data/model/IProductDescription.ts";
import {ProductCard} from "./components/ProductCard/ProductCard.tsx";
import {useState} from "react";

export const App = () => {
    const [repository, setRepository] = useState<IModelOfGoodsStorage>(new StandardProductModel());
    const [numberOfItemsInTheBasket, setNumberOfItemsInTheBasket] = useState<number>(0);
    const addProductToCart = (product: IProductDescription): void => {
        const copyOfRepository = repository;
        copyOfRepository.addGoodToCart(product);
        setRepository(copyOfRepository);
        setNumberOfItemsInTheBasket(repository.purchasedGoods.size);
    }

    const [countrysWork, setCountrysWork] = useState<string>(repository.obtainTheCountriesOfOriginOfTheArtists()[0]);
    const changeCountry = (country: string): void => {
        setCountrysWork(country);
    }

    return (
        <>
            <Navbar
                numberOfItemsInTheBasket={numberOfItemsInTheBasket}>
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
                            view={ButtonForm.RECTANGLE}
                            title='Продукция'
                            functionPerformed={() => alert('Продукция')}/>
                </div>
            </Wrapper>
            <ReviewWorks
                countries={repository.obtainTheCountriesOfOriginOfTheArtists()}
                changeCountry={changeCountry}>
                {repository.receiveAllGoodsFromTheCountry(countrysWork).map((product: IProductDescription) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addProductToCart}>
                        <div className='product-card__description'>
                            <p className='product-card__description__technology'>{product.technology}</p>
                            <p className='product-card__description__size'>&nbsp;({product.size?.width}x{product.size?.height})</p>
                        </div>
                        <p className='product-card__price'>{product.price()}</p>
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
                            customStyles={{marginTop: '40px'}}
                            functionPerformed={() => alert('Ознакомиться')}/>
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
                               target='_blank'>&nbsp;</a>
                            <a className='our-team__information__artists__link our-team__information__artists__link--2'
                               href='http://localhost:5173/'
                               target='_blank'>&nbsp;</a>
                            <a className='our-team__information__artists__link our-team__information__artists__link--3'
                               href='http://localhost:5173/'
                               target='_blank'>&nbsp;</a>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Footer>
                {socialNetworks.map((socialNetwork: SocialNetworkLinkProps) => (
                    <SocialNetworkLink
                        key={socialNetwork.imageDesc}
                        imageDesc={socialNetwork.imageDesc}
                        imageSrc={socialNetwork.imageSrc}
                        href={socialNetwork.href}/>
                ))}
            </Footer>
        </>
    )
}