import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { apiUser } from '../api/api';

const ContactBox = () => {
    const [boxState, setBoxState] = useState();
    const [email, setEmail] = useState('');
    const [emailVaild, setEmailVaild] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const getData = async () => {
            const localData = localStorage.getItem('localData');

            if (localData == null) {
                const data = await apiUser.getData();
                localStorage.setItem('localData', JSON.stringify(data));
                setBoxState(data);
            } else {
                setBoxState(JSON.parse(localData));
            }
        };
        getData();
    }, []);

    const onChangeHandler = e => {
        // 이메일 정규식
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        //인풋값이 있을때 정규식 검증
        if (e.target.value) {
            e.target.value.match(regExp) ? setEmailVaild(true) : setEmailVaild(false);
        }

        setEmail(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (emailVaild) {
            alert(`${email}로 뉴스레터 등록되었습니다.`);
            setEmail('');
        } else {
            alert('이메일을 다시 확인해주세요.');
            ref.current.focus();
        }
    };
    return (
        <>
            <ContactBoxArea bg={boxState?.urls && boxState?.urls.full}>
                <strong className="title">{boxState?.alt_description}</strong>
                <p className="paragraph1">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                    tend to repeat predefined chunks as necessary.
                </p>
                <p className="paragraph2">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore.
                </p>
                <SubscribeArea>
                    <strong>Subscribe to our newsletter</strong>
                    <form onSubmit={handleSubmit}>
                        <div className={`inputArea ${email === '' ? '' : emailVaild ? 'vaild' : 'invaild'}`}>
                            <input type="text" placeholder="Enter your email" onChange={onChangeHandler} ref={ref} />
                            <button type="submit" className="btnSubmit"></button>
                            {email === '' ? null : emailVaild ? null : (
                                <p className="error">Please enter a valid email!</p>
                            )}
                        </div>
                    </form>
                </SubscribeArea>
            </ContactBoxArea>
        </>
    );
};

const SubscribeArea = styled.div`
    margin-top: 95px;
    strong {
        font-size: 16px;
        font-family: 'Exo 2', sans-serif;
        color: #fff;
    }
    .inputArea {
        position: relative;
        max-width: 500px;
        width: 100%;
        height: 50px;
        margin: 16px auto 0;
        &:before {
            content: '';
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            filter: blur(5px);
            -webkit-filter: blur(5px);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }
        &.vaild {
            input {
                border: solid 1px #00c300;
            }
        }
        &.invaild {
            input {
                border: solid 1px #f63;
            }
            .btnSubmit {
                opacity: 0.5;
            }
        }
        input {
            position: relative;
            z-index: 20;
            display: block;
            width: 100%;
            height: 100%;
            padding: 10px 20px;
            border-radius: 7px;
            background: transparent;
            border: 1px solid #fff;
            box-sizing: border-box;
            color: #fff;
            font-family: 'Exo 2', sans-serif;
            font-size: 16px;
            outline: none;
            &::placeholder {
                color: #fff;
            }
        }
        .btnSubmit {
            position: absolute;
            z-index: 20;
            top: 9px;
            right: 9px;
            display: block;
            padding: 0;
            border: 0;
            width: 32px;
            height: 32px;
            background: url('/images/btn/btnSubmit.png') no-repeat;
            background-size: cover;
            cursor: pointer;
        }
        .error {
            margin-top: 9px;
            text-align: left;
            color: #f63;
        }
    }
`;

const ContactBoxArea = styled.div`
    background: url(${bg => bg.bg}) no-repeat;
    background-size: cover;
    padding: 156px 80px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    .title {
        font-size: 24px;
    }
    .paragraph1 {
        margin-top: 23px;
        font-size: 18px;
        line-height: 1.67;
    }
    .paragraph2 {
        position: relative;
        font-size: 14px;
        line-height: 1.57;
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            margin: 32px 0;
            background-color: rgba(255, 255, 255, 0.5);
        }
    }
`;

export default ContactBox;
