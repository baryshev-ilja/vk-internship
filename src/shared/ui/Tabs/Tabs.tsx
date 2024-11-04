import { ReactNode } from 'react';

import { typedMemo } from '@/shared/lib/HOC/typedMemo';
import { classnames } from '@/shared/lib/classnames';

import cls from './Tabs.module.scss';

interface TabsItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    tabs: TabsItem<T>[];
    currentValue: T;
    onTabClick: (tab: TabsItem<T>) => void;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const {
        tabs,
        currentValue,
        onTabClick,
    } = props;

    const onClickHandler = (tab: TabsItem<T>) => () => {
        onTabClick?.(tab);
    };

    return (
        <div className={cls.tabsWrapper}>
            {tabs.map((tab) => (
                <button
                    className={classnames(cls.tab, {
                        [cls.activeTab]: tab.value === currentValue,
                    }, [])}
                    type="button"
                    key={tab.value}
                    onClick={onClickHandler(tab)}
                    disabled={tab.value === currentValue}
                >
                    {tab.content}
                </button>
            ))}
        </div>
    );
});
