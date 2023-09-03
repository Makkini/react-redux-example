import {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ButtonTheme} from '@/shared/ui/Button/Button';
import {Input} from '@/shared/ui/Input/Input';
import cls from './RegistrationForm.module.scss';

import {useDispatch, useSelector} from 'react-redux';
import {getRegistrationState} from '../../model/selectors/getRegistrationState/getRegistrationState';
import {registrationByUsername} from '../../model/services/registrationByUsername/registrationByUsername';
import {Text, TextTheme} from '@/shared/ui/Text/Text';
import {registrationActions} from '../../model/slice/registrationSlice';

export interface RegistrationFormProps {
    className?: string;
    onSuccess?: () => void;
}


const RegistrationForm = memo(({ className, onSuccess }: RegistrationFormProps) => {

    const dispatch = useDispatch();
    const {email, password, isLoading, error} = useSelector(getRegistrationState);
    const onChangeUsername = useCallback((value: string)=> {
        dispatch(registrationActions.setUsernameReg(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string)=> {
        dispatch(registrationActions.setPasswordReg(value));
    }, [dispatch]);

    const onRegClick = useCallback(async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const result = await dispatch(registrationByUsername({ email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            dispatch(registrationActions.setPasswordReg(''));
            dispatch(registrationActions.setUsernameReg(''));
        }
    }, [onSuccess, dispatch, email, password]);

    return (

        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <Text title={'Форма регистрации'} />
            {error && <Text text={'Некорректные email или пароль'} theme={TextTheme.ERROR}/>}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={'Введите имя пользователя'}
                onChange={onChangeUsername}
                value={email}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={'Введите пароль'}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.regBtn}
                onClick={onRegClick}
                disabled={isLoading}
            >
                {'Зарегистрироваться'}
            </Button>
        </div>
    );
});

export default RegistrationForm;
