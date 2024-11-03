import { Text } from '../Text';

import VKLogo from '@/shared/assets/svg/vk-logo.svg?react';

import cls from './Header.module.scss';

export const Header = () => {
    return (
        <div className={cls.headerWrapper}>
            <div className="container">
                <div className={cls.headerInner}>
                    <VKLogo />
                    <Text fontSize="xl">Random Users Generator</Text>
                </div>
            </div>
        </div>
    );
};
