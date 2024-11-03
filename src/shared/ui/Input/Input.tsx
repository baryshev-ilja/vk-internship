import { ChangeEvent, InputHTMLAttributes, useRef } from 'react';

import { classnames, Mods } from '@/shared/lib/classnames/classnames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
    placeholder?: string;
    errorValidate?: boolean;
}

export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder = '',
        errorValidate,
        ...otherProps
    } = props;

    const modsCls: Mods = {
        [cls.error]: errorValidate,
    };

    const placeholderValue = errorValidate
        ? 'Заполните поле!'
        : placeholder;

    const refInput = useRef<HTMLInputElement>(null);

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    return (
        <input
            ref={refInput}
            className={classnames(cls.input, modsCls, [className])}
            value={value}
            onChange={onChangeHandler}
            disabled={errorValidate}
            placeholder={placeholderValue}
            {...otherProps}
        />
    );
};
