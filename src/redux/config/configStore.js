import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileCardState from '../modules/profileSlice';

const store = configureStore(
    {
        reducer: {
            profileCard: profileCardState,
        },
    },
    composeWithDevTools(),
);

export default store;
