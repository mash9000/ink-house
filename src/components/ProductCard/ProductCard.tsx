import './product-card/product-card.scss';
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
            <p className='product-card__artist'>{product.ownerOrAuthor}</p>
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