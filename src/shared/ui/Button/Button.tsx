import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classnames } from '@/shared/lib/classnames';
import type { AdditionalCls } from '@/shared/lib/classnames';

import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        onClick,
        variant = 'primary',
        ...otherProps
    } = props;

    const additionalCls: AdditionalCls = [
        className,
        cls[variant],
    ];

    return (
        <button
            className={classnames(cls.button, {}, additionalCls)}
            type="button"
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
