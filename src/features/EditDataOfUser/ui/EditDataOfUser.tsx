import { useUserHandlersAndData } from '../model/hooks/useUserHandlersAndData';

import { EditableInfoOfUserList } from '@/entities/EditableInfoOfUser';
import type { User } from '@/entities/User';
import { classnames } from '@/shared/lib/classnames';
import { Button } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './EditDataOfUser.module.scss';

interface EditDataOfUserProps {
    className?: string;
    userData: User;
}

export const EditDataOfUser = (props: EditDataOfUserProps) => {
    const { userData, className } = props;
    const {
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
    } = useUserHandlersAndData(userData);

    return (
        <HStack
            className={classnames(cls.editableInfoWrapper, {}, [className])}
            justify="between"
            max
        >
            <EditableInfoOfUserList
                className={cls.editableInfoList}
                location={locationInfo}
                phone={phoneInfo}
                email={emailInfo}
                locationValidateError={locationError}
                phoneValidateError={phoneError}
                emailValidateError={emailError}
                onChangeLocation={onChangeLocationHandler}
                onChangePhone={onChangePhoneHandler}
                onChangeEmail={onChangeEmailHandler}
                canEdit={canEdit}
            />
            {!canEdit && (
                <VStack
                    className={cls.buttonWrapper}
                    gap="5"
                    data-editable="false"
                >
                    <Button variant="outline">Удалить</Button>
                    <Button onClick={onClickEditOrSaveHandler}>Изменить</Button>
                </VStack>
            )}
            {canEdit && (
                <VStack
                    className={cls.buttonWrapper}
                    gap="5"
                    data-editable="true"
                >
                    <Button variant="outline">Отменить</Button>
                    <Button onClick={onClickEditOrSaveHandler}>Сохранить</Button>
                </VStack>
            )}
        </HStack>
    );
};
