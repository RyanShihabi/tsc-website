// ButtonGrid.js
import React from 'react';
import putting_data from "./putting.json"
import ViewerCard from './ViewerCard';

const data = new Array(10).fill({ youtubeID: "https://www.youtube.com/watch?v=Wpu0X9XWrt8", json_data: putting_data });

const AnalyticsGrid = () => {
    return (
    <div className="analytics-grid">
        {data.map((item) => (
            <div className='full-card'>
                <ViewerCard youtubeID={item.youtubeID} json_data={item.json_data}/>
                <h3 className="title" style={{"color": "black"}}>Nick Taylor's 72-Foot Putt</h3>
            </div>
        ))}
    </div>
    );
};

export default AnalyticsGrid;


