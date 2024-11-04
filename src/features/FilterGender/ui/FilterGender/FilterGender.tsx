import { filterGenderList } from '../../model/const/filterGenderList';

import { Card } from '@/shared/ui/Card';
import { Select } from '@/shared/ui/Select';

export const FilterGender = () => {
    return (
        <Card>
            <Select
                currentValue="male"
                items={filterGenderList}
                onChange={() => {}}
                label="Пол пользователя:"
            />
        </Card>
    );
};
