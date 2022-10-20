import React from 'react';
import './GridBlock.css';

const GridBlock = (props) => {
  return (
    <div className="grid">
        <div className="grid-container">
            <div className="grid-content">
                <div className="grid-title">{props.title}</div>
                <div className="grid-tag">{props.tag}</div>
            </div>
        </div>
    </div>
  )
}

export default GridBlock;