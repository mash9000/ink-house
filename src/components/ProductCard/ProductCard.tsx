import './product-card/product-card.scss';
import './product-card/__image/product-card__image.scss';
import './product-card/__owner-or-author/product-card__owner-or-author.scss';
import './product-card/__title/product-card__title.scss';
import './product-card/__description/product-card__description.scss';
import './product-card/__description/__technology/product-card__description__technology.scss';
import './product-card/__description/__size/product-card__description__size.scss';
import './product-card/__price/product-card__price.scss';

import {Button} from "../Button/Button.tsx";
import {ButtonForm} from "../Button/model/ButtonForm.ts";
import type {CSSProperties, FC, ReactNode} from "react";
import {ButtonColor} from "../Button/model/ButtonColor.ts";
import type {IProduct} from "./model/IProduct.ts";

interface ProductCardProps {
    product: IProduct;
    children: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = ({product, children}) => {
    const btnCSSProperties: CSSProperties = {
        width: '310px',
        height: '65px'
    };
    return (
        <figure className="product-card">
            <img
                className="product-card__image"
                src={product.image.src}
                alt={product.image.description}/>
            <p className='product-card__owner-or-author'>{product.ownerOrAuthor}</p>
            <figcaption className='product-card__title'>{product.mainTitle}</figcaption>
            {children}
            <Button
                color={ButtonColor.GREEN}
                view={ButtonForm.RECTANGLE}
                title={product.buttonTitle}
                customStyles={btnCSSProperties}/>
        </figure>
    )
}