import {
    ImgHTMLAttributes,
    memo,
    useLayoutEffect,
    useState,
} from 'react';

import { Skeleton } from '../Skeleton';

import { classnames } from '@/shared/lib/classnames';

import cls from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    isLoading?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        isLoading,
        ...otherProps
    } = props;

    const [loading, setLoading] = useState(Boolean(isLoading) ?? true);

    useLayoutEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoading(false);
        };
    }, [src]);

    if (loading) {
        return <Skeleton width={64} height={64} borderRadius="50%" />;
    }

    return (
        <img
            className={classnames(cls.avatar, {}, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});
