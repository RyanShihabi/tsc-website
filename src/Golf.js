import React from 'react';
import Navbar from './Navbar';
import ChannelSlider from './ChannelSlider';
import AnalyticsGrid from './AnalyticsGrid';

const Golf = () => {
    return(
        <div className="App">
            <header className="App-header">
                <Navbar />
                <div className='banner'>
                    <h1>Golf ⛳️</h1>
                </div>
                <ChannelSlider />
                <AnalyticsGrid />
            </header>
        </div>
    );
}

export default Golf;