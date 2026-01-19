import './wrapper/wrapper.scss';
import './wrapper/__image/wrapper__image.scss';
import './wrapper/__information/wrapper__information.scss';
import './wrapper/__information/__heading/wrapper__information__heading.scss';
import './wrapper/__information/__description/wrapper__information__description.scss';

import './custom-wrapper-promo/custom-wrapper-promo.scss';
import './custom-wrapper-promo/__heading/custom-wrapper-promo__heading.scss';
import './custom-wrapper-promo/__description/custom-wrapper-promo__description.scss';

import './out-team/our-team.scss';
import './out-team/__image/our-team__image.scss';
import './out-team/__information/our-team__information.scss';
import './out-team/__information/__heading/our-team_information__heading.scss';
import './out-team/__information/__artists/our-team__information__artists.scss';
import './out-team/__information/__artists/__link/our-team__information__artists__link.scss';
import './out-team/__information/__artists/__link/_1/our-team__information__artists__link--1.scss';
import './out-team/__information/__artists/__link/_2/our-team__information__artists__link--2.scss';
import './out-team/__information/__artists/__link/_3/our-team__information__artists__link--3.scss';
import './out-team/__information/__description/our-team__information__description.scss';

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