import { SVGProps, VFC } from 'react';

import { classnames } from '@/shared/lib/classnames';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './EditableInfoOfUser.module.scss';

interface EditableInfoOfUserProps {
    className?: string;
    isEditable?: boolean;
    icon: VFC<SVGProps<SVGSVGElement>>;
    infoOfUserValue: string;
    onChangeInfoOfUser: (value: string) => void;
    infoOfUserPlaceholder: string;
    hasErrorValidate?: boolean;
}

export const EditableInfoOfUser = (props: EditableInfoOfUserProps) => {
    const {
        className,
        isEditable,
        icon,
        infoOfUserValue,
        onChangeInfoOfUser,
        infoOfUserPlaceholder,
        hasErrorValidate,
    } = props;

    const NoEditableContent = (
        <Text className={cls.infoOfUser} color="gray">
            {infoOfUserValue}
        </Text>
    );

    const EditableContent = (
        <Input
            value={infoOfUserValue}
            onChange={onChangeInfoOfUser}
            placeholder={infoOfUserPlaceholder}
            errorValidate={hasErrorValidate}
        />
    );

    return (
        <HStack
            className={classnames(cls.infoWrapper, {}, [className])}
            gap="10"
            align="center"
        >
            <Icon Svg={icon} width={24} height={24} />
            {isEditable ? EditableContent : NoEditableContent}
        </HStack>
    );
};
