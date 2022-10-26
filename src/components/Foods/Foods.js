import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    return (
        <div className='container foods-section mt-5'>
            <div className='main-section'>
                {
                    foods.map(food => <Food key={food.idMeal} food={food}></Food>)
                }
            </div>
            <div className='cart-section'>hello cart</div>
        </div>
    );
};

export default Foods;