import './wrapper/wrapper.scss';
import './wrapper/__image/wrapper__image.scss';
import './wrapper/__information/wrapper__information.scss';
import './wrapper/__information/__heading/wrapper__information__heading.scss';
import './wrapper/__information/__description/wrapper__information__description.scss';

import './custom-wrapper-promo/custom-wrapper-promo.scss';
import './custom-wrapper-promo/__heading/custom-wrapper-promo__heading.scss';
import './custom-wrapper-promo/__description/custom-wrapper-promo__description.scss';

import type {FC, ReactNode} from "react";

interface WrapperProps {
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}