import type { User } from '@/entities/User';
import { EditDataOfUser } from '@/features/EditDataOfUser';
import { classnames } from '@/shared/lib/classnames';
import { pluralItems } from '@/shared/lib/plurals';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './UserCard.module.scss';

interface UserCardProps {
    className?: string;
    userData: User
}

export const UserCard = (props: UserCardProps) => {
    const { userData, className } = props;
    const { name, dob, picture } = userData;

    return (
        <Card className={classnames(cls.userCard, {}, [className])}>
            <VStack gap="14">
                <HStack gap="16" align="center">
                    <Avatar
                        src={picture.large}
                        alt={`${name.first} ${name.last}`}
                    />
                    <VStack gap="1">
                        <Text fontSize="l" as="h3" color="black">
                            {`${name.first} ${name.last}`}
                        </Text>
                        <Text color="grayLight">{pluralItems(dob.age)}</Text>
                    </VStack>
                </HStack>

                <EditDataOfUser userData={userData} />
            </VStack>
        </Card>
    );
};
