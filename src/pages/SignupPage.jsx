// SignupPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignupPage = () => {
  const [email, setEmail] = useState(''); // 자동 재렌더링을 위한 useState 사용
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

    


  const handleSignUp = async () => {
    const url = 'http://localhost:8080/api/auth/signup';
    const data = {
      email,
      password,
      confirm,
    };

    try {
      
      const response = await axios.post(url, data);
      if (response.status === 201){
        alert("회원가입 성공")
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
      alert("아이디와 비밀번호를 다시 확인해주세요.")
    }
  };

  return (
    <>
      <Container>
        <Text>Ticketnest</Text>
        <Inner>
          <br />{' '}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <label>Email:</label>
            <input
              style={{ marginBottom: '10px' }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label style={{ display: 'flex', justifyContent: 'flex-end' }}>
              Password:
            </label>
            <input
              style={{ marginBottom: '15px' }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label style={{ display: 'flex', justifyContent: 'flex-end' }}>
              Confirm:
            </label>
            <input
              style={{ marginBottom: '15px' }}
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <button
              style={{ marginBottom: '30px', padding: '10px' }}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </Inner>
      </Container>
      <StFooter></StFooter>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 50px);
`;

const Text = styled.div`
  display: flex;
  margin-top: 150px;
  width: 536px;
  height: 52px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font: normal 36px/84px 'Arial', sans-serif; // Choose a suitable font
  letter-spacing: 0px;
  opacity: 1;
  background: linear-gradient(
    90deg,
    rgba(134, 0, 240, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(134, 0, 240, 1) 100%
  );
  -webkit-background-clip: text;
  color: #8600f0;
  border: 2px solid #8600f0;
  border-radius: 15px;
  padding: 20px;
`;

const Inner = styled.div`
  margin-top: 10px;
  width: 536px;
  height: 56px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font: 20px/32px Pretendard;
  font-size: medium;
  letter-spacing: 0px;
  opacity: 1;
  line-height: 20px;
  span {
    text-align: center;
    font: 20px/32px Pretendard;
    font-size: medium;
    letter-spacing: 0px;
    color: #8600f0;
    line-height: 5px;
  }
  label {
    font-size: 20px;
  }
`;

const StFooter = styled.footer`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c1c1c1 0% 0% no-repeat padding-box;
`;

export default SignupPage;
