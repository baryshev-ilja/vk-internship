import { validateValue } from '../lib/validateValue/validateValue';

interface UseValidateDateProps {
    locationInfo: string;
    phoneInfo: string;
    emailInfo: string;
}

export const useValidateDate = (props: UseValidateDateProps) => {
    const { locationInfo, phoneInfo, emailInfo } = props;

    const isValid = validateValue(locationInfo) && validateValue(phoneInfo) && validateValue(emailInfo);
    const noValidLocation = !validateValue(locationInfo);
    const noValidPhone = !validateValue(phoneInfo);
    const noValidEmail = !validateValue(emailInfo);

    return {
        isValid,
        noValidLocation,
        noValidPhone,
        noValidEmail,
    };
};
