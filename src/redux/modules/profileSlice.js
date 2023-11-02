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
        getShuffleArray: state => {
            // 기존 배열 복사
            var shuffledArray = state.slice();

            // 배열을 랜덤 순서로 섞는 함수
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

            // 배열 섞기
            shuffleArray(shuffledArray);
            return shuffledArray;
        },
    },
});

export const { getProfileInfo, getShuffleArray } = profileSlice.actions;
export default profileSlice.reducer;
