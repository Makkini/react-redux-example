import {LoginSchema} from '@/features/AuthByUsername';
import {UserSchema} from '@/entities/User';
import {RegistrationSchema} from '@/features/RegistrationUser';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema
    registrationForm?: RegistrationSchema
}
