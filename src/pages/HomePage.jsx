import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  const [goodsList, setPosters] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:8080/api/goods';
    axios
      .get(url)
      .then((res) => setPosters(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {goodsList.map((goods, index) => (
          <div key={goods.id}>
            <Link to={`/goods/${goods.id}`}> 
              <img
                src={goods.imgUrl}
                alt={`Performance Poster ${index}`}
              />
            </Link>
            <p
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <p
                className='txt1'
                style={{
                  fontSize: 'larger',
                  fontWeight: 'bold',
                }}
              >
                {goods.title}
              </p>
              <p
                className='txt2'
                style={{
                  color: '#a0a0a0',
                }}
              >
                {goods.content}
              </p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
