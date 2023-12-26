import { Button, Menu } from '@mui/material'
import React from 'react'
import MenuItem from '@mui/material/MenuItem';

const categories = [{
    imgSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
    text: 'Grocery'
},{
    imgSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
    text: 'Mobiles'
},{
    imgSrc: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100',
    text: 'Fashion',
    children: ['Mens', 'Womens', 'Kids']
},{
    imgSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
    text: 'Electronics'
},{
    imgSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',
    text: 'Home & Furniture'
},{
    imgSrc: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100',
    text: 'Appliances'
},{
    imgSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
    text: 'Travel'
},{
    imgSrc: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
    text: 'Beauty, Toys & More'
},{
    imgSrc: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100',
    text: 'Two Wheelers'
}]


const Categories = () => {

const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categoriesWithChildren = (category) => {
    return (
        <>
        <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {category.text}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
        </>
    );
}

  return (
    <div className="categories-container">
        <h1>Categories</h1>
        <div className='flex flex-row justify-around'>
            {categories.map(category => 
                <div className='flex flex-col items-center cursor-pointer'>
                    <img src={category.imgSrc} />
                    

                {category.children ? categoriesWithChildren(category) : <div className='font-bold text-sm'>{category.text}</div>}

            </div>
            )}
        </div>
       
    </div>
  )
}

export default Categories