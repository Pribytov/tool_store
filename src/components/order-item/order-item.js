import React from 'react';
import { useDispatch } from 'react-redux';
import { ToolCover } from '../../components/tool-cover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './order-item.css';

export const OrderItem = ({tool}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(tool.id));
    }

    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <ToolCover image={tool.image} />
            </div>
            <div className='order-item__title'>
                <span>
                    {tool.title}
                </span>
            </div>
            <div className='order-item__price'>
                <span>
                    {tool.price} руб.
                </span>
                <AiOutlineCloseCircle
                    size={25}
                    className='cart-item__delete-icon'
                    onClick={handleClick}
                />

            </div>
        </div>
    );
};