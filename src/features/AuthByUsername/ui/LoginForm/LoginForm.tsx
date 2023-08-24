import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import cls from './LoginForm.module.scss';
export interface LoginFormProps {
    className?: string;
}


const LoginForm = memo(({ className }: LoginFormProps) => {

    return (

        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={'Введите имя пользователя'}

            />
            <Input
                type="text"
                className={cls.input}
                placeholder={'Введите пароль'}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
            >
                {'Войти'}
            </Button>
        </div>
    );
});

export default LoginForm;
