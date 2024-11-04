import { Card } from '../Card';
import { Skeleton } from '../Skeleton';
import { HStack, VStack } from '../Stack';

import cls from './CardSkeleton.module.scss';

export const CardSkeleton = () => {
    return (
        <Card>
            <VStack gap="24">
                <HStack gap="16" align="center">
                    <Skeleton width={64} height={64} borderRadius="50%" />
                    <VStack gap="7">
                        <Skeleton width={232} height={17} borderRadius="25px" />
                        <Skeleton width={67} height={14} borderRadius="25px" />
                    </VStack>
                </HStack>
                <VStack className={cls.bottomSkeletonWrapper} gap="25">
                    <Skeleton width={312} height={20} borderRadius="25px" />
                    <Skeleton width={168} height={20} borderRadius="25px" />
                    <Skeleton width={168} height={20} borderRadius="25px" />
                </VStack>
            </VStack>
        </Card>
    );
};
