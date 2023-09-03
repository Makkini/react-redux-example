import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo } from 'react';
import {Text, TextSize} from '@/shared/ui/Text/Text';
import {TestCard} from '@/widgets/TestCard';
interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Text size={TextSize.L} title={'Мои тесты'} />
            <div className={cls.TestAbout} >
                <Text size={TextSize.M}  title={'Название'} />
                <Text size={TextSize.M} title={'Дата создания'} />
                <Text size={TextSize.M} title={'Кол-во участников'} />
                <Text size={TextSize.M} title={'Действия'} />
            </div>
            <hr/>
            <TestCard/>
        </div>
    );
});

export default MainPage;
