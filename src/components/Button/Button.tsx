import './button/button.scss';

import './button/_green/button--green.scss';
import './button/_green/_hover/button--green--hover.scss';
import './button/_green/_focus/button--green--focus.scss';
import './button/_green/_active/button--green--active.scss';

import './button/_sand/button--sand.scss';
import './button/_sand/_hover/button--sand--hover.scss';
import './button/_sand/_focus/button--sand--focus.scss';
import './button/_sand/_active/button--sand--active.scss';

import './button/_rounded/button--rounded.scss';
import './button/_rectangle/button--rectangle.scss';

import type {CSSProperties, FC} from "react";
import {ButtonForm} from "./model/ButtonForm.ts";
import {ButtonColor} from "./model/ButtonColor.ts";

interface ButtonProps {
    color: ButtonColor;
    view: ButtonForm;
    title: string;
    customStyles?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({
                                            color,
                                            view,
                                            title,
                                            customStyles
                                        }) => {
    return (
        <button
            className={`button ${getColorSchemeClass(color)} ${getFormClass(view)}`}
            type='button'
            style={customStyles}>{title}</button>
    );
}

const getColorSchemeClass = (color: ButtonColor): string => {
    switch (color) {
        case ButtonColor.GREEN:
            return "button--green button--green--hover button--green--focus button--green--active";
        case ButtonColor.SAND:
            return "button--sand button--sand--hover button--sand--focus button--sand--active";
        default:
            return "";
    }
}

const getFormClass = (view: ButtonForm): string => {
    switch (view) {
        case ButtonForm.RECTANGLE:
            return "button--rectangle";
        case ButtonForm.ROUNDED:
            return "button--rounded";
        default:
            return "";
    }
}