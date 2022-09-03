import React from 'react';
import { ToolCover } from '../tool-cover';
import { ToolBuy } from '../tool-buy';
import { ToolFeature } from '../tool-feature';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentTool } from '../../redux/tools/reducer';
import './tool-item.css';

export const ToolItem = ({ tool }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setCurrentTool(tool));
        navigate(`/app/${tool.title}`);
    }
    return (
        <div className='tool-item' onClick={clickHandler}>
            <ToolCover image={tool.image}/>
            <div className='tool-item__details'>
                <span className='tool-item__title'>{tool.title}</span>
                <div className='tool-item__feature'>
                    {
                        tool.features.map(feature => <ToolFeature feature={feature} key={feature}/>)
                    }
                </div>
                <div className='tool-item__buy'>
                    <ToolBuy tool={tool}/>
                </div>
            </div>
        </div>
    );
};