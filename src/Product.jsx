import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';

const Product = (props) => {
    const [state, dispatch] = useStateValue();
    console.log("this is data layer>>>", state.basket)
    const addToBasket = () => {
        // dispatch item in data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.img,
                rating: props.rating,
                price: props.price,
            },
        });
    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{props.title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(props.rating).fill().map((_, i) => {
                        return <p>⭐</p>
                    })}

                </div>
            </div>

            <img
                src={props.img}
                alt='product image'
            />
            <button onClick={addToBasket} >Add to Basket
            </button>
        </div>
    )
}

export default Product
