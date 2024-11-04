import type { UserNationals } from '@/entities/User';

export enum CountryList {
    US = 'США',
    DK = 'Дания',
    GB = 'Англия',
    RS = 'Сербия',
    NL = 'Нидерланды',
    DE = 'Германия',
    FI = 'Финляндия',
    TR = 'Турция',
    ALL = 'Все страны',
}

export interface TabsCountryItem {
    value: UserNationals;
    content: CountryList;
}
