import {memo} from 'react';
import {Modal} from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: ()=>void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginFormAsync/>
        </Modal>
    );
});
