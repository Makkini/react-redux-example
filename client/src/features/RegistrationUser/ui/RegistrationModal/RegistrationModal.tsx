import {memo} from 'react';
import {Modal} from '@/shared/ui/Modal/Modal';
import { RegistrationFormAsync } from '../../ui/RegistrationForm/RegistrationForm.async';

interface RegistrationModalProps {
    className?: string;
    isOpenReg?: boolean;
    onCloseReg?: ()=>void;
}

export const RegistrationModal = memo((props: RegistrationModalProps) => {
    const { className, isOpenReg, onCloseReg } = props;
    return (
        <Modal
            isOpen={isOpenReg}
            onClose={onCloseReg}
            lazy
        >
            <RegistrationFormAsync onSuccess={onCloseReg}/>
        </Modal>
    );
});
