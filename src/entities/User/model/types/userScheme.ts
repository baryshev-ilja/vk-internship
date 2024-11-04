export type UserNationals = 'US' | 'DK' | 'GB' | 'RS' | 'NL' | 'DE' | 'FI' | 'TR' | 'ALL';

export interface User {
    gender: 'female' | 'male';
    name: {
        first: string;
        last: string;
    };
    location: {
        city: string;
        country: string;
    };
    email: string;
    login: {
        uuid: string;
    };
    dob: {
        age: number;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: Omit<UserNationals, 'ALL'>;
}
