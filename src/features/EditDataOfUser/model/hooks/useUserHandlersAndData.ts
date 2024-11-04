import { useCallback, useState } from 'react';

import { useValidateDate } from './useValidateDate';
import { useVisibleError } from './useVisibleError';

import { User } from '@/entities/User';

export const useUserHandlersAndData = (userData: User) => {
    const { location, phone, email } = userData;

    const [locationInfo, setLocationInfo] = useState<string>(`${location.country}, ${location.city}`);
    const [phoneInfo, setPhoneInfo] = useState<string>(phone);
    const [emailInfo, setEmailInfo] = useState<string>(email);
    const [canEdit, setCanEdit] = useState<boolean>(false);

    const { error: locationError, setError: setLocationError } = useVisibleError();
    const { error: phoneError, setError: setPhoneError } = useVisibleError();
    const { error: emailError, setError: setEmailError } = useVisibleError();

    const {
        isValid,
        noValidLocation,
        noValidPhone,
        noValidEmail,
    } = useValidateDate({ locationInfo, phoneInfo, emailInfo });

    const onChangeLocationHandler = useCallback((value: string) => {
        setLocationInfo(value);
    }, []);

    const onChangePhoneHandler = useCallback((value: string) => {
        setPhoneInfo(value);
    }, []);

    const onChangeEmailHandler = useCallback((value: string) => {
        setEmailInfo(value);
    }, []);

    const onClickEditOrSaveHandler = useCallback(() => {
        if (noValidLocation) {
            setLocationError(true);
        }
        if (noValidPhone) {
            setPhoneError(true);
        }
        if (noValidEmail) {
            setEmailError(true);
        }

        if (isValid) {
            setCanEdit((prev) => !prev);
        }
    }, [isValid, noValidEmail, noValidLocation, noValidPhone, setEmailError, setLocationError, setPhoneError]);

    return {
        locationInfo,
        phoneInfo,
        emailInfo,
        locationError,
        phoneError,
        emailError,
        canEdit,
        onChangeLocationHandler,
        onChangePhoneHandler,
        onChangeEmailHandler,
        onClickEditOrSaveHandler,
    };
};
