import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J1SmXSHSEz5SAKIQoXtZmf2j1nH6q4Hd9txrqUkpnGG797FfHYMGiqa7nZFEN4JhXmWIxdfU6jLLkTIkauiIT1J00mZWTWOzC';
    const onToken = token => {
        console.log(token);
        alert('Payment succesful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton