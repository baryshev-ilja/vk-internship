import { ReactNode } from 'react';

import { classnames } from '@/shared/lib/classnames';

import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card = (props: CardProps) => {
    const { className, children } = props;

    return (
        <div className={classnames(cls.card, {}, [className])}>
            {children}
        </div>
    );
};
