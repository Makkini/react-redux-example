import cls from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo } from 'react';
import {Text, TextSize} from '@/shared/ui/Text/Text';
interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <Text size={TextSize.L} title={'Профиль'} />
        </div>
    );
});
