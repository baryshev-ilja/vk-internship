import { FilterGenderItem, GenderList } from '../types/filterGenderTypes';

export const filterGenderList: FilterGenderItem[] = [
    {
        value: 'all',
        content: GenderList.ALL,
        disabled: false,
    },
    {
        value: 'male',
        content: GenderList.MALE,
        disabled: false,
    },
    {
        value: 'female',
        content: GenderList.FEMALE,
        disabled: false,
    },
];
