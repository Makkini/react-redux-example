import cls from './Navbar.module.scss';
import {classNames} from '@/shared/lib/classNames/classNames';
import React, {memo, useCallback, useState} from 'react';
import {Button, ButtonTheme} from '@/shared/ui/Button/Button';
import {LoginModal} from '@/features/AuthByUsername/ui/LoginModal/LoginModal';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from '@/entities/User';
import {RegistrationModal} from '@/features/RegistrationUser';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isAuthRegistrationModal, setIsAuthRegistrationModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseRegistrationModal = useCallback(() => {
        setIsAuthRegistrationModal(false);
    }, []);

    const onShowRegistrationModal = useCallback(() => {
        setIsAuthRegistrationModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if(authData) {
        return(
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                        {'Выйти'}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    {'Войти'}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.link}
                    onClick={onShowRegistrationModal}>
                    {'Регистрация'}
                </Button>
            </div>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            {isAuthRegistrationModal &&
                <RegistrationModal
                    isOpenReg={isAuthRegistrationModal}
                    onCloseReg={onCloseRegistrationModal}
                />
            }
        </div>
    );
});
