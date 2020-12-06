import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

const Subtotal = () => {
    const [state, dispatch] = useStateValue();
    const getBasketTotal = () => {
        let total = 0;
        for (let i = 0; i < state.basket.length; i++) {
            total = total + state.basket[i].price;
        }
        return total;
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>Subtotal ({state.basket.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />This Order Contains a Gift
                            </small>
                        </>
                    )
                }
                }
                decimalScale={2}
                value={getBasketTotal()}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}

            />
            <button>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
