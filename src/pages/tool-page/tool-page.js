import React from 'react';
import { useSelector } from 'react-redux';
import { ToolCover } from '../../components/tool-cover';
import { ToolFeature } from '../../components/tool-feature';
import { ToolBuy } from '../../components/tool-buy';
import './tool-page.css';

export const ToolPage = () => {
    const tool = useSelector(state => state.tool.currentTool)

    if(!tool) return null;

    return (
        <div className='tool-page'>
            <h1 className='tool-page__title'>{tool.title}</h1>
            <div className='tool-page__content'>
                <div className='tool-page__left'>
                    <iframe
                        width='90%'
                        height='400px'
                        title='Youtube Video Player'
                        src={tool.video}
                        frameBorder='0'
                    ></iframe>
                </div>
                <div className='tool-page__right'>
                    <ToolCover image={tool.image}/>
                    <p>{tool.description}</p>
                    <p className='secondary-text'>Популярные метки этого продукта</p>
                    {tool.features.map(feature => <ToolFeature feature={feature} key={feature}/>)}
                    <div className='tool-page__buy-tool'>
                        <ToolBuy tool={tool}/>
                    </div>
                </div>
            </div>
        </div>
    );
}