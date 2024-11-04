import { EditableInfoOfUser } from '../EditableInfoItem/EditableInfoOfUser';

import LocationIcon from '@/shared/assets/svg/location-icon.svg?react';
import MailIcon from '@/shared/assets/svg/mail-icon.svg?react';
import PhoneIcon from '@/shared/assets/svg/phone-icon.svg?react';
import { VStack } from '@/shared/ui/Stack';

interface EditableInfoOfUserListProps {
    className?: string;
    location: string;
    phone: string;
    email: string;
    locationValidateError?: boolean;
    phoneValidateError?: boolean;
    emailValidateError?: boolean;
    canEdit?: boolean;
    onChangeLocation: (value: string) => void;
    onChangePhone: (value: string) => void;
    onChangeEmail: (value: string) => void;
}

export const EditableInfoOfUserList = (props: EditableInfoOfUserListProps) => {
    const {
        className,
        location,
        phone,
        email,
        locationValidateError,
        phoneValidateError,
        emailValidateError,
        canEdit,
        onChangeLocation,
        onChangePhone,
        onChangeEmail,
    } = props;

    return (
        <VStack className={className} gap="5" max>
            <EditableInfoOfUser
                icon={LocationIcon}
                infoOfUserValue={location}
                onChangeInfoOfUser={onChangeLocation}
                isEditable={canEdit}
                hasErrorValidate={locationValidateError}
                infoOfUserPlaceholder="Локация"
            />
            <EditableInfoOfUser
                icon={PhoneIcon}
                infoOfUserValue={phone}
                onChangeInfoOfUser={onChangePhone}
                isEditable={canEdit}
                hasErrorValidate={phoneValidateError}
                infoOfUserPlaceholder="Телефон"
            />
            <EditableInfoOfUser
                icon={MailIcon}
                infoOfUserValue={email}
                onChangeInfoOfUser={onChangeEmail}
                isEditable={canEdit}
                hasErrorValidate={emailValidateError}
                infoOfUserPlaceholder="Почта"
            />
        </VStack>
    );
};
