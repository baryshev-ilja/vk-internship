import { ReactNode } from 'react';

import { classnames } from '@/shared/lib/classnames';
import type { AdditionalCls, Mods } from '@/shared/lib/classnames';

import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '1' | '4' | '5' | '7' | '10' | '14' | '15' | '16' | '24' | '25';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    1: cls.gap1,
    4: cls.gap4,
    5: cls.gap5,
    7: cls.gap7,
    10: cls.gap10,
    14: cls.gap14,
    15: cls.gap15,
    16: cls.gap16,
    24: cls.gap24,
    25: cls.gap25,
};

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    max?: boolean;
    gap?: FlexGap;
    'data-editable'?: string;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align,
        direction = 'row',
        max,
        gap,
        'data-editable': dataEditable,
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };

    const classes: AdditionalCls = [
        className,
        justifyClasses[justify],
        align && alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    return (
        <div
            className={classnames(cls.flex, mods, classes)}
            data-editable={dataEditable}
        >
            {children}
        </div>
    );
};
