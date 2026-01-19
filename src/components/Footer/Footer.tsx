import './footer/footer.scss';
import './footer/__blocks/footer__blocks.scss';
import './footer/__blocks/__social-networks-and-rights/footer__blocks__social-networks-and-rights.scss';
import './footer/__blocks/__social-networks-and-rights/__social-networks/footer__blocks__social-networks.scss';
import './footer/__blocks/__social-networks-and-rights/__rights/footer__blocks__rights.scss';
import './footer/__blocks/__logo-and-communication/footer__blocks__logo-and-communication.scss';
import './footer/__blocks/__logo-and-communication/__telephone-number/footer__blocks__logo-and-communication__telephone-number.scss';
import './footer/__blocks/__logo-and-communication/__telephone-number/_number/footer__blocks__logo-and-communication__telephone-number--number.scss';
import './footer/__blocks/__logo-and-communication/__telephone-number/_subscriber/footer__blocks__logo-and-communication__telephone-number--subscriber.scss';
import './footer/__blocks/__history/footer__blocks__history.scss';
import './footer/__blocks/__history/__reproductions/_country/footer__blocks__history__reproductions--country.scss';

import {type FC, type ReactNode} from "react";
import {MainHomeLink} from "../MainHomeLink/MainHomeLink.tsx";
import {Link} from "../Link/Link.tsx";

interface FooterProps {
    children?: ReactNode;
}

export const Footer: FC<FooterProps> = ({children}) => {
    return (
        <footer className='footer'>
            <div className='footer__blocks'>
                <div className='footer__blocks__logo-and-communication'>
                    <MainHomeLink/>
                    <div className='footer__blocks__logo-and-communication__telephone-number'>
                        <a className='footer__blocks__logo-and-communication__telephone-number--number' href='tel:+7 (999) 543-54-54'>+7 (999) 543-54-54</a>
                        <p className='footer__blocks__logo-and-communication__telephone-number--subscriber'>Мастерская</p>
                    </div>
                </div>
                <div className='footer__blocks__history'>
                    <div className='footer__blocks__history__reproductions'>
                        <Link href={new URL('http://localhost:5173/')} title='Репродукции'/>
                        <p className='footer__blocks__history__reproductions--country'>Франция</p>
                        <p className='footer__blocks__history__reproductions--country'>Германия</p>
                        <p className='footer__blocks__history__reproductions--country'>Англия</p>
                    </div>
                    <div className='footer__blocks__history__new-items'>
                        <Link href={new URL('http://localhost:5173/')} title='Новинки'/>
                        <p className='footer__blocks__history__reproductions--country'>2021</p>
                        <p className='footer__blocks__history__reproductions--country'>2020</p>
                    </div>
                    <div className='footer__blocks__history__about-us'>
                        <Link href={new URL('http://localhost:5173/')} title='О нас'/>
                        <p className='footer__blocks__history__reproductions--country'>Художники</p>
                        <p className='footer__blocks__history__reproductions--country'>Менеджеры</p>
                    </div>
                </div>
                <div className='footer__blocks__social-networks-and-rights'>
                    <div className='footer__blocks__social-networks'>
                        {children}
                    </div>
                    <p className='footer__blocks__rights'>
                        Ink. House ®<br/>
                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}