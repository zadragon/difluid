import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        userImg: '/images/users/person1.png',
        userTitle: 'Sed ut perspiciatis',
        userDesc:
            'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
    },
    {
        userImg: '/images/users/person2.png',
        userTitle: 'Lorem ipsum dolor',
        userDesc:
            'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
    },
    {
        userImg: '/images/users/person3.png',
        userTitle: 'Nemo enim ipsam',
        userDesc:
            'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
    },
];

const profileSlice = createSlice({
    name: 'profileCardState',
    initialState,
    reducers: {
        getProfileInfo: state => {
            return state;
        },
    },
});

export const { getProfileInfo } = profileSlice.actions;
export default profileSlice.reducer;
