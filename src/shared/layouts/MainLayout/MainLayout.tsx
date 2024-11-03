import { memo, ReactNode } from 'react';

import { classnames } from '@/shared/lib/classnames/classnames';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactNode;
    filters: ReactNode;
    content: ReactNode;

}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {
        className,
        header,
        filters,
        content,
    } = props;

    return (
        <div className={classnames(cls.mainLayout, {}, [className])}>
            <header className={cls.header}>{header}</header>
            <main className={cls.main}>
                <section className={cls.content}>{content}</section>
                <section className={cls.filters}>{filters}</section>
            </main>
        </div>
    );
});
