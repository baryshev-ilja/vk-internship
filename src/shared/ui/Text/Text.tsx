import { ReactNode } from 'react';

import { AdditionalCls, classnames } from '@/shared/lib/classnames/classnames';

import cls from './Text.module.scss';

type FontSize = 's' | 'l' | 'xl';
type TextColor = 'white' | 'black' | 'gray' | 'grayLight';

interface TextProps {
    className?: string;
    fontSize?: FontSize;
    color?: TextColor;
    as?: 'p' | 'span' | 'h3';
    children?: ReactNode;
}

export const Text = (props: TextProps) => {
    const {
        className,
        fontSize = 's',
        color = 'black',
        as = 'span',
        children,
    } = props;

    const Tag = `${as}` as keyof JSX.IntrinsicElements;

    const additionalCls: AdditionalCls = [
        className,
        cls[fontSize],
        cls[color],
    ];

    return (
        <Tag className={classnames(cls.text, {}, additionalCls)}>
            {children}
        </Tag>
    );
};
