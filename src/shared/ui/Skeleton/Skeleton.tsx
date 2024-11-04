import { CSSProperties } from 'react';

import { classnames } from '@/shared/lib/classnames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        borderRadius,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            style={styles}
            className={classnames(cls.skeleton, {}, [className])}
        />
    );
};
