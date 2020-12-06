import React from 'react'
import './checkoutProduct.css';
import { useStateValue } from './StateProvider';
const CheckoutProduct = (props) => {
    const [state, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={props.img} alt="product image" />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{props.title}</p>
                <p className='checkoutProduct__price'><small>$</small><strong>{props.price}</strong></p>
                <div className='checkoutProduct__rating'>
                    {Array(props.rating).fill().map((_, i) => {
                        return <p>⭐</p>
                    })}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
