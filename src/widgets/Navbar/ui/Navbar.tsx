import cls from './Navbar.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import React, {memo, useCallback, useState} from 'react';
import {Button, ButtonTheme} from '@/shared/ui/Button/Button';
import {LoginModal} from '@/features/AuthByUsername/ui/LoginModal/LoginModal';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {'Войти'}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
});
