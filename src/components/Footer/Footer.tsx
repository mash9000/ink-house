import './footer/footer.scss';
import './footer/__blocks/footer__blocks.scss';
import './footer/__blocks/__social-networks-and-rights/footer__blocks__social-networks-and-rights.scss';
import './footer/__blocks/__social-networks-and-rights/__social-networks/footer__blocks__social-networks.scss';
import './footer/__blocks/__social-networks-and-rights/__rights/footer__blocks__rights.scss';
import './footer/__blocks/__logo-and-communication/footer__blocks__logo-and-communication.scss';
import './footer/__blocks/__logo-and-communication/__telephone-number/footer__blocks__logo-and-communication__telephone-number.scss';
import './footer/__blocks/__logo-and-communication/__telephone-number/_number/footer__blocks__logo-and-communication__telephone-number--number.scss';
import './footer/__blocks/__logo-and-communication/__telephone-number/_subscriber/footer__blocks__logo-and-communication__telephone-number--subscriber.scss';

import {type FC, type ReactNode} from "react";
import {MainHomeLink} from "../MainHomeLink/MainHomeLink.tsx";

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