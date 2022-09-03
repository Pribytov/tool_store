import React from 'react';
import { Button } from '../button';
import { useDispatch, useSelector} from 'react-redux';
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import './tool-buy.css';


export const ToolBuy = ({tool}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);

    const isItemIncart = items.some(item => item.id === tool.id);

    const clickHandler = (e) => {
        e.stopPropagation();
        if (isItemIncart) {
            dispatch(deleteItemFromCart(tool.id));
        } else {
            dispatch(setItemInCart(tool));
        }
    }

    return (
        <div className='tool-buy'>
            <span className='tool-buy__price'>
                {tool.price} руб.
            </span>
            <Button
                type={ isItemIncart ? 'secondary' : 'primary' }
                onClick={clickHandler}
            >
                { isItemIncart ? 'Убрать из корзины' : 'В Корзину' }
            </Button>
        </div>
    );
};
