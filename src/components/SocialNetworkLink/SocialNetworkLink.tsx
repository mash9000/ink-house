import './social-network-link/social-network-link.scss';

import type {FC} from "react";

export interface SocialNetworkLinkProps {
    href: URL;
    imageSrc: string;
    imageDesc: string;
}

export const SocialNetworkLink: FC<SocialNetworkLinkProps> = ({
                                                                  href,
                                                                  imageSrc,
                                                                  imageDesc
                                                              }) => {
    return (
        <a className='social-network-link'
           target={"_blank"}
           href={href.href}>
            <img src={imageSrc}
                 alt={imageDesc}/>
        </a>
    );
}