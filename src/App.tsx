import {ProductCard} from "./components/ProductCard/ProductCard.tsx";
import type {IProduct} from "./components/ProductCard/model/IProduct.ts";
import {nanoid} from 'nanoid';

export const App = () => {
    const product: IProduct = {
        id: nanoid(),
        image: {
            src: '/images/works/france/3.webp',
            description: 'работа "Процедура"'
        },
        ownerOrAuthor: 'Франсуа Дюпон',
        mainTitle: 'Процедура',
        technology: 'Цветная литография',
        size: {
            width: 40,
            height: 60
        },
        price: {
            getViewOfCurrency: (value: number) => new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(value).slice(0, -2) + ' руб'
        },
        buttonTitle: 'Купить'
    }

    return (
        <ProductCard product={product}>
            <div className='product-card__description'>
                <div
                    className='product-card__description__technology'>{product.technology}</div>
                <div className='product-card__description__size'>&nbsp;({product.size?.width}x{product.size?.height})</div>
            </div>
            <p className='product-card__price'>{product.price.getViewOfCurrency(20000)}</p>
        </ProductCard>
    )
}