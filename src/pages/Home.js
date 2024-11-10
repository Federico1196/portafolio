import React from 'react';
import '../styles/Home.css';
import PP from '../assets/pp.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Home() {
  return (
    <>
        <div className='container'>
            <div className="PP">
                <img src={PP} alt="Profile" />
            </div>
            <div className='description'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio reprehenderit 
                asperiores ullam autem at quis! Dolore voluptatibus quis cumque quia, 
                reprehenderit vitae sint voluptatum iure error quasi officia aperiam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio reprehenderit 
                asperiores ullam autem at quis! Dolore voluptatibus quis cumque quia, 
                reprehenderit vitae sint voluptatum iure error quasi officia aperiam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio reprehenderit 
                asperiores ullam autem at quis! Dolore voluptatibus quis cumque quia, 
                reprehenderit vitae sint voluptatum iure error quasi officia aperiam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio reprehenderit 
                asperiores ullam autem at quis! Dolore voluptatibus quis cumque quia, 
                reprehenderit vitae sint voluptatum iure error quasi officia aperiam!</p>
            </div>
        </div>
        <div className='resume'>
          <div className='r-left'>
          <button style={{ cursor: 'pointer' }} >Software Development <ArrowDownwardIcon/></button>
          </div>
          <div className='r-right'>
            <button style={{ cursor: 'pointer' }} >Data Analitycs <ArrowDownwardIcon/></button>
          </div>         
        </div>

    </>
  )
}

export default Home;
