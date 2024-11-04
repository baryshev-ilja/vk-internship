import { SVGProps, VFC } from 'react';

import { classnames } from '@/shared/lib/classnames';

import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        width = 24,
        height = 24,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classnames(cls.icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
        />
    );
};
