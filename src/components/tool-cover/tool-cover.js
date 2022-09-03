import React from 'react';
import "./tool-cover.css";

export const ToolCover = ({image=""}) => {
    return(
        <div className='tool-cover' style={{backgroundImage: `url(${image})`}}/>
    );
};