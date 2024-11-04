import { FilterCountry } from '@/features/FilterCountry';
import { FilterGender } from '@/features/FilterGender';
import { VStack } from '@/shared/ui/Stack';

import cls from './UserFilters.module.scss';

export const UserFilters = () => {
    return (
        <VStack gap="16" className={cls.filters}>
            <FilterGender />
            <FilterCountry />
        </VStack>
    );
};
