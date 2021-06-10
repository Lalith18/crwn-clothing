import React from 'react';
import './checkout-item.styles.scss'

import { connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem }) => {
    const {name, imageUrl, quantity, price} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>{quantity}</div>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);