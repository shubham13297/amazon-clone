import React from 'react';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [state, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout ad"
                />
                <div>
                    <h3>Hello,{state.user?.email}</h3>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>
                    {state.basket.map((item) => {
                        return <CheckoutProduct id={item.id} title={item.title} img={item.image} price={item.price} rating={item.rating} />
                    })}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
