import './link/link.scss';
import './link/_hover/link--hover.scss';
import './link/_focus/link--focus.scss';
import './link/_active/link--active.scss';

import type {FC} from "react";

export interface LinkProps {
    href: URL;
    title: string;
}

export const Link: FC<LinkProps> = ({href, title}) => {
    return (
        <a
            className='link link--hover link--focus link--active'
            href={href.href}
            target={"_blank"}>{title}</a>
    );
}