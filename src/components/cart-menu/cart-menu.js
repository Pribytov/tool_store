import React from 'react';
import { calcTotalPrice } from '../utils';
import { Button } from '../button';
import { CartItem } from '../cart-item';
import './cart-menu.css';

export const CartMenu = ({items, onClick}) => {
    return (
        <div className='cart-menu'>
            <div className='cart-menu__games_list'>
                {
                    items.length > 0 ?
                        items.map(game =>
                            <CartItem
                                key={game.title}
                                title={game.title}
                                price={game.price}
                                id={game.id}
                            />)
                    : 'Корзина пуста'
                }
            </div>
            {
                items.length > 0 ?
                    <div className='cart-menu__arrange'>
                        <div className='cart-menu__total-price'>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>
                        <Button type='primary' size='m' onClick = { onClick }>
                            Оформить заказ
                        </Button>
                    </div>

                :
                    null
            }

        </div>
    );
};