import React from 'react'
import { Avatar } from '@mui/material'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { pink } from '@mui/material/colors';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Carousel from './Carousel';
import CardCarousel from './CardCarousel';
import Categories from './Categories'

const Home = () => {

  return (
    <div className="home-container">
      <div className="navbar">
          <Avatar sx={{ bgcolor: pink[500] }}><LocalShippingOutlinedIcon /></Avatar> <span>MyKart</span>
          <div className="searchbar">
            <SearchOutlinedIcon className="searchIcon" />
            <input type="text" name="search" placeholder="Search for Products, Brands & more" />
          </div>
      </div>
      <div className="content">
        <Categories />
        <Carousel />
        <CardCarousel />
      </div>
    </div>
  )
}

export default Home