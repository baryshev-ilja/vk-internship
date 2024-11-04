import { useEffect, useState } from 'react';

import { User } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { CardSkeleton } from '@/shared/ui/CardSkeleton';
import { Header } from '@/shared/ui/Header';
import { VStack } from '@/shared/ui/Stack';
import { UserCard } from '@/widgets/UserCard';
import { UserFilters } from '@/widgets/UserFilters';

export const App = () => {
    const [data, setData] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((data) => {
                setData(data.results[0]);
                setLoading(false);
            });
    }, []);

    let block;

    if (!data && loading) {
        block = <CardSkeleton />;
    }

    if (data && !loading) {
        block = (
            <VStack gap="16">
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
                <UserCard userData={data} />
            </VStack>
        );
    }

    return (
        <MainLayout
            className="app"
            header={<Header />}
            filters={<UserFilters />}
            content={block}
        />
    );
};
