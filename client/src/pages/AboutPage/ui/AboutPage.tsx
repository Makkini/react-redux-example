import cls from './AboutPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo } from 'react';
import {Text, TextSize} from '@/shared/ui/Text/Text';
interface AboutPageProps {
    className?: string;
}

const AboutPage = memo((props: AboutPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            <Text size={TextSize.L} title={'Пройденные тесты'} />
        </div>
    );
});

export default AboutPage;
