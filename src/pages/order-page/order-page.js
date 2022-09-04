import React from 'react';
import { calcTotalPrice } from '../../components/utils';
import { OrderItem } from '../../components/order-item'
import { useSelector } from 'react-redux';
import './order-page.css';


export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    if (items.length === 0) {
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {items.map(tool => <OrderItem tool={tool}/>)}
            </div>
            <div className='order-page__right'>
                <div className='order-page__total-price'>
                    <span>
                        {items.length} товаров на сумму {calcTotalPrice(items)} руб.
                    </span>
                </div>
            </div>
        </div>
    );
};