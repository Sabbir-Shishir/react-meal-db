import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Food.css';

const Food = (props) => {
    const { food } = props;
    const { strMeal, strMealThumb, strArea, strInstructions } = food;
    console.log(food);
    return (
        <div>
            <div className="card rounded-5">
                <img src={strMealThumb} className="card-img-top rounded-top" alt="..." />
                <div className="card-body rounded-3-top">
                    <h4 className="card-title">{strMeal}</h4>
                    <h6 className='mb-3'>{strArea} Food</h6>
                    <p className="card-text">{strInstructions.slice(0, 160) + ' ...'}</p>
                    <button className='card-button'>
                        Add To Cart
                        <span className='cart-icon ms-2'>
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Food;