import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState(''); // setEmail은 함수로써 email의 값을 변경시키는 역할을 한다. 바로 밑에 있는 setPassword 또한 password를 변경시킨다.
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const url = `${process.env.REACT_APP_URL}/api/auth/login`;
    const data = {
      email,
      password,
    };


    try {
      const response = await axios.post(url, data, { withCredentials: true });
      if (response.status === 201){
        alert("로그인 성공")
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
        <Text>
        Ticketnest
        </Text>
        <Inner>
          <br />      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
          <label >Email:</label>
          <input style={{marginBottom: '10px'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label style={{ display: 'flex', justifyContent: 'flex-end' }}>Password:</label>
          <input style={{marginBottom: '15px'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button style={{marginBottom: '30px', padding: '10px'}} onClick={handleLogin}>Login</button>
          </div>
          {/* <span style={{fontSize: '30px',}} >ticketnest</span> */}
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
  font: normal 36px/84px "Arial", sans-serif; // Choose a suitable font
  letter-spacing: 0px;
  opacity: 1;
  background: linear-gradient(90deg, rgba(134,0,240,1) 0%, rgba(255,255,255,0) 50%, rgba(134,0,240,1) 100%);
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
    font-size:20px;
  }
`;


const StFooter = styled.footer`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c1c1c1 0% 0% no-repeat padding-box;
`;

export default LoginPage;
