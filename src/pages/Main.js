import React from 'react';
import { useSelector } from 'react-redux';
import ProfileCard from '../components/ProfileCard';
import styled from 'styled-components';
import ContactBox from '../components/ContactBox';

const Main = () => {
    let profileInfo = useSelector(state => state.profileCard);

    // 기존 배열 복사
    var shuffledArray = profileInfo.slice();

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

    return (
        <div>
            <ProfileAreaWrapper>
                <TitleTxt>
                    Snap photos and share like
                    <br />
                    never before
                </TitleTxt>
                <ProfileArea>
                    {shuffledArray.map((item, index) => {
                        return (
                            <ProfileCard
                                key={index}
                                userImg={item.userImg}
                                userTitle={item.userTitle}
                                userDesc={item.userDesc}
                            />
                        );
                    })}
                </ProfileArea>
            </ProfileAreaWrapper>
            <ContactBox />
        </div>
    );
};

const ProfileAreaWrapper = styled.div`
    padding: 120px 80px 110px;
`;

const TitleTxt = styled.h1`
    font-family: 'Exo 2', sans-serif;
    font-weight: normal;
    font-size: 48px;
`;

const ProfileArea = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 70px;
    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 90px;
    }
`;
export default Main;
