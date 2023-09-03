import {RegistrationSchema} from '../types/RegistrationSchema';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {registrationByUsername} from '../../model/services/registrationByUsername/registrationByUsername';


const initialState: RegistrationSchema = {
    isLoading: false,
    email: '',
    password: ''
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUsernameReg: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPasswordReg: (state, action) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registrationByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(registrationByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {actions: registrationActions} = registrationSlice;
export const {reducer: registrationReducer} = registrationSlice;



