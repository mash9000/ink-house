import './basket/basket.scss';
import './basket/_hover/basket--hover.scss';
import './basket/_active/basket--active.scss';
import './basket/_focus/basket--focus.scss';
import './basket/__counter/basket__counter.scss';

import type {FC} from "react";

interface CartProps {
    numberOfItemsInTheBasket: number;
}

export const Cart: FC<CartProps> = ({numberOfItemsInTheBasket}) => {
    return (
        <div className='basket basket--hover basket--active basket--focus'>
            <span
                className={`${numberOfItemsInTheBasket > 0 ? 'basket__counter' : ''}`}>
                {`${numberOfItemsInTheBasket > 0 ? numberOfItemsInTheBasket : ''}`}
            </span>
        </div>
    );
}