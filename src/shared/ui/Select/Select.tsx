import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';

import ArrowIcon from '@/shared/assets/svg/arrow-icon.svg?react';
import { classnames } from '@/shared/lib/classnames/classnames';

import cls from './Select.module.scss';

interface SelectItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface SelectProps<T extends string> {
    className?: string;
    items?: SelectItem<T>[];
    currentValue?: string;
    defaultValue?: string;
    onChange: (value: T) => void;
    label: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        items,
        currentValue,
        defaultValue,
        onChange,
        label,
    } = props;

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === currentValue);
    }, [currentValue, items]);

    return (
        <div className={cls.selectWrapper}>
            <Text className={cls.selectLabel} color="gray">{label}</Text>
            <HListBox
                className={classnames(cls.selectInner, {}, [className])}
                as="div"
                value={currentValue}
                onChange={onChange}
            >
                <HListBox.Button className={cls.selectButton}>
                    {({ open }) => (
                        <>
                            {selectedItem?.content ?? defaultValue}
                            <Icon
                                className={classnames(cls.arrowIcon, { [cls.selectOpened]: open }, [])}
                                Svg={ArrowIcon}
                                width={12}
                                height={7}
                            />
                        </>
                    )}
                </HListBox.Button>

                <HListBox.Options className={cls.selectOptions}>
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.value === currentValue}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classnames(cls.selectOption, {
                                        [cls.selectOptionHovered]: active,
                                        [cls.selectOptionDisabled]: item.disabled,
                                        [cls.selectOptionCurrent]: selected,
                                    }, [])}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </div>
    );
};
