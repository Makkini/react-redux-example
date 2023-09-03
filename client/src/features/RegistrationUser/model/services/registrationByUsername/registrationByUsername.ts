import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User, userActions} from '@/entities/User';
import {USER_LOCALSTORAGE_KEY} from '@/shared/const/localstorage';

interface RegistrationByUsernameProps {
    email: string
    password: string
}

export const registrationByUsername =
    createAsyncThunk<User, RegistrationByUsernameProps, {rejectValue: string}>
    (
        'registration/registrationByUsername',
        async (authData, thunkAPI) => {
            try {
                const response = await axios.post<User>('http://localhost:7000/api/user/registration/',authData);
                if(!response.data){
                    throw new Error();
                }
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                thunkAPI.dispatch(userActions.setAuthData(response.data));
                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue('Некорректный email или пароль');
            }
        }
    );



