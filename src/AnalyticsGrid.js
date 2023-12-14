// ButtonGrid.js
import React from 'react';
import putting_data from "./putting.json"
import ViewerCard from './ViewerCard';

const data = new Array(10).fill({ youtubeID: "https://www.youtube.com/watch?v=Wpu0X9XWrt8", json_data: putting_data });

const AnalyticsGrid = () => {
    return (
    <div className="analytics-grid">
        {data.map((item) => (
            <ViewerCard youtubeID={item.youtubeID} json_data={item.json_data}/>
        ))}
    </div>
    );
};

export default AnalyticsGrid;


