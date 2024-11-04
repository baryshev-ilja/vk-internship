export enum GenderList {
    ALL = 'Любой',
    MALE = 'Мужчина',
    FEMALE = 'Женщина'
}

export interface FilterGenderItem {
    value: 'all' | 'male' | 'female';
    content: GenderList;
    disabled: boolean;
}
