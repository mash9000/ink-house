import './footer/footer.scss';
import './footer/__blocks/footer__blocks.scss';
import './footer/__blocks/__social-networks-and-rights/footer__blocks__social-networks-and-rights.scss';
import './footer/__blocks/__social-networks-and-rights/__social-networks/footer__blocks__social-networks.scss';
import './footer/__blocks/__social-networks-and-rights/__rights/footer__blocks__rights.scss';

import {type FC, type ReactNode} from "react";

interface FooterProps {
    children?: ReactNode;
}

export const Footer: FC<FooterProps> = ({children}) => {
    return (
        <footer className='footer'>
            <div className='footer__blocks'>

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