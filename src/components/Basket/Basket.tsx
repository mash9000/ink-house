import './basket/basket.scss';
import './basket/_hover/basket--hover.scss';
import './basket/_active/basket--active.scss';
import './basket/_focus/basket--focus.scss';
import './basket/__counter/basket__counter.scss';

import type {FC} from "react";

interface BasketProps {
    numberOfItemsInTheBasket: number | null;
}

export const Basket: FC<BasketProps> = ({numberOfItemsInTheBasket}) => {
    return (
        <div className='basket basket--hover basket--active basket--focus'>
            {numberOfItemsInTheBasket !== 0 && <span
                className='basket__counter'>{numberOfItemsInTheBasket}</span>}
        </div>
    );
}