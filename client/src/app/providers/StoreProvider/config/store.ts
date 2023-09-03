import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from './StateSchema';
import {loginReducer} from '@/features/AuthByUsername';
import {userReducer} from '@/entities/User';
import {registrationReducer} from '@/features/RegistrationUser';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        registrationForm: registrationReducer
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState
    });
}
