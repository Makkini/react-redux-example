import {useState} from 'react';
import AboutIcon from 'shared/assets/icons/aboutSite.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ButtonSize, ButtonTheme} from '@/shared/ui/Button/Button';
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink/AppLink';
import {RoutePath} from '@/app/providers/router/config/routeConfig';
import {ThemeSwitcher} from '@/widgets/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        Главная
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        О сайте
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
