import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileCard = ({ userImg, userTitle, userDesc }) => {
    return (
        <CardItem>
            <div className="userImg">
                <img src={userImg} alt={userDesc} />
            </div>
            <div className="userTitle">{userTitle}</div>
            <div className="userDesc">{userDesc}</div>
            <Link to="/">Learn more</Link>
        </CardItem>
    );
};

const CardItem = styled.li`
    .userImg {
        width: 108px;
        height: 108px;
        border-radius: 50%;
        img {
            width: 100%;
            height: auto;
        }
    }
    .userTitle {
        margin-top: 40px;
        font-size: 24px;
        font-weight: 900;
    }
    .userDesc {
        margin-top: 24px;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.8);
        line-height: 1.67;
    }
    a {
        display: block;
        margin-top: 24px;
        color: #18a0fb;
        font-family: 'Exo 2';
        font-size: 18px;
        text-decoration: none;
        font-weight: 700;
    }
`;

export default ProfileCard;
