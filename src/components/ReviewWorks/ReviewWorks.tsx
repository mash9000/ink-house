import './review-works/review-works.scss';
import './review-works/__control-panel/review-works__control-panel.scss';
import './review-works/__control-panel/__heading/review-works__control-panel--heading.scss';

import type {FC, ReactNode} from "react";
import {Button} from "../Button/Button.tsx";
import {ButtonColor} from "../Button/model/ButtonColor.ts";
import {ButtonForm} from "../Button/model/ButtonForm.ts";

interface ReviewWorksProps {
    countries: string[];
    children?: ReactNode;
}

export const ReviewWorks: FC<ReviewWorksProps> = ({countries, children}) => {
    const gag = (): void => {
    }

    return (
        <div className="review-works">
            <div className='review-works__control-panel'>
                <h1 className='review-works__control-panel--heading'>Репродукции</h1>
                {countries.map((coutry: string) => (
                    <Button
                        key={coutry}
                        color={ButtonColor.GREEN}
                        view={ButtonForm.ROUNDED}
                        title={coutry}
                        actionOnClick={() => gag()}/>
                ))}
            </div>
            {children}
        </div>
    );
}