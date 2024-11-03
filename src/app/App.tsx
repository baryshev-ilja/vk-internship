import { MainLayout } from '@/shared/layouts/MainLayout';
import { Card } from '@/shared/ui/Card';
import { Header } from '@/shared/ui/Header';
import { Select } from '@/shared/ui/Select';
import { Tabs } from '@/shared/ui/Tabs';

import cls from './App.module.scss';

export const App = () => {
    const list = Array.from({ length: 75 }).fill(0).map((_) => {
        return <div>sasdaSDAsdaSDAsd</div>;
    });

    const itemsOptions = [
        {
            value: 'all',
            content: 'Любой',
            disabled: false,
        },
        {
            value: 'male',
            content: 'Мужчина',
            disabled: false,
        },
        {
            value: 'female',
            content: 'Женщина',
            disabled: false,
        },
    ];

    const tabsItems = [
        {
            value: 'all country',
            content: 'Все страны',
        },
        {
            value: 'US',
            content: 'США',
        },
        {
            value: 'DE',
            content: 'Германия',
        },
    ];

    const block = (
        <Card>
            {list}
        </Card>
    );

    return (
        <MainLayout
            className="app"
            header={<Header />}
            filters={(
                <div className={cls.filters}>
                    <Card>
                        <Select
                            currentValue="male"
                            items={itemsOptions}
                            onChange={() => {}}
                            label="Пол пользователя:"
                        />
                    </Card>
                    <Card>
                        <Tabs
                            tabs={tabsItems}
                            currentValue="DE"
                            onTabClick={() => {}}
                        />
                    </Card>
                </div>
            )}
            content={block}
        />
    );
};
