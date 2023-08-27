import cls from './TestCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import {Text} from '@/shared/ui/Text/Text';
import deleteIcon from '@/shared/assets/icons/deleteIcon.svg';
import windowOpen from '@/shared/assets/icons/windowOpen.svg';
import {Icon} from '@/shared/ui/Icon/Icon';
interface TestCardProps {
    className?: string;
}

export const TestCard = memo((props: TestCardProps) => {
    const { className } = props;
    return (
        <>
            <div className={classNames(cls.TestCard, {}, [className])}>
                <div className={cls.TestInfo}>
                    <Text title={'Тест 1'} />
                    <Text title={'03.06.2023'} />
                    <Text title={'5'} />
                </div>
                <div className={cls.TestActions} >
                    <Icon className={cls.icon} Svg={deleteIcon}/>
                    <Icon className={cls.icon} Svg={windowOpen}/>
                </div>
            </div>
            <hr/>
        </>
    );
});
