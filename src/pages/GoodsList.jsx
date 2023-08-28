import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { cookies } from '../shared/cookie';
import { io } from 'socket.io-client';

const GoodsList = () => {
  const [goods, setDetail] = useState({});
  const goodsid = useParams() // URL에서 goodsId 추출
  const [waitlistMessage, setWaitlistMessage] = useState("아직 예매를 하지 않으셨네요")

  useEffect(() => {
    const url = `${process.env.REACT_APP_URL}/api/goods/${goodsid.id}`;
    // console.log(url);
    axios
      .get(url)
      .then((res) => setDetail(res.data))
      .catch((err) => console.error(err));
  }, [goodsid]);

  const handleBooking = async () => {
    // 예매 로직 구현
    const bookingUrl = `${process.env.REACT_APP_URL}/api/booking/${goodsid.id}`;
    const access_token = cookies.get('Authorization');
    // console.log(access_token)
    axios
      .post(
        bookingUrl,
        {userId: 1},
        {
          headers: {
            // 'Authorization': access_token
            'Authorization': 'Bearer ' + access_token
          },
        }
      )
      .then((res) => {
        alert('공연 예매 완료')
        // console.log(res)
      })
      .catch((err) => {
        console.error(err);
        alert('공연 예매 실패')
      });
  };

  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_SOCKET_URL}/TicketNest-socket`);


    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('TicketNest-socket');
    });

    socket.on('waiting', (message) => {
      console.log('message:',message)
      setWaitlistMessage(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);



  return (
    <GoodsContainer>
      <GoodsImage src={goods.imgUrl} alt={`${goods.id} 공연 포스터`} />
      <BookingButton onClick={handleBooking}>지금 예매하기</BookingButton>
      <p>{waitlistMessage}</p>
      <SeatInfo>
        {/* <h3>좌석 선택</h3> */}
        <h3>총 좌석 수: {goods.bookingLimit}</h3>
      </SeatInfo>
    </GoodsContainer>
  );
};

export default GoodsList;



const GoodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const GoodsImage = styled.img`
  max-width: 800px;
  border-radius: 10px;
`;

const BookingButton = styled.button`
  background-color: #FF5733;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
  display: inline-block;
  margin: 15px;
`;

const SeatInfo = styled.div`
  font-size: 18px;
  text-align: center;
`;