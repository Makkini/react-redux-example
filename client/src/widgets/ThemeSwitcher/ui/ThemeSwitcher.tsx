import cls from './ThemeSwitcher.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import {memo} from 'react';
import {Theme, useTheme} from '@/app/providers/ThemeProvider';
import Moon from 'shared/assets/icons/moon.svg';
import Sun from 'shared/assets/icons/sun.svg';
import {Button, ButtonTheme} from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme} >
            {theme === Theme.DARK ? <Moon/> : <Sun/>  }
        </Button>
    );
});
