import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShuffleArray } from '../redux/modules/profileSlice';
import ProfileCard from '../components/ProfileCard';
import styled from 'styled-components';
import ContactBox from '../components/ContactBox';

const Main = () => {
    const dispatch = useDispatch();
    const profileInfo = useSelector(state => state.profileCard);

    useEffect(() => {
        dispatch(getShuffleArray());
    }, [dispatch]);

    return (
        <div>
            <ProfileAreaWrapper>
                <TitleTxt>
                    Snap photos and share like
                    <br />
                    never before
                </TitleTxt>
                <ProfileArea>
                    {profileInfo?.map(item => {
                        return (
                            <ProfileCard
                                key={item.userImg}
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
