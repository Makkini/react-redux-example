import {LoginSchema} from '../types/loginSchema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';


const initialState: LoginSchema = {
    isLoading: false,
    email: '',
    password: ''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;


