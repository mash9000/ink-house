import type {
    SocialNetworkLinkProps
} from "../../components/SocialNetworkLink/SocialNetworkLink.tsx";

export const socialNetworks: SocialNetworkLinkProps[] = [
    {
        href: new URL('http://localhost:5173/'),
        imageSrc: '/images/social-networks/instagram.svg',
        imageDesc: 'перейти на Instagram'
    },
    {
        href: new URL('http://localhost:5173/'),
        imageSrc: '/images/social-networks/meta.svg',
        imageDesc: 'перейти на Meta'
    },
    {
        href: new URL('http://localhost:5173/'),
        imageSrc: '/images/social-networks/youtube.svg',
        imageDesc: 'перейти на YouTube'
    },
];