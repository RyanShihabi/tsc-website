import React from 'react';
import CardCarousel from './CardCarousel';
import Navbar from './Navbar'
import Grid from "./Grid"
import AnalyticsGrid from './AnalyticsGrid';

const Home = () => {
    return(
        <div className="App">
            <header className="App-header">
                <Navbar />
                <CardCarousel />
                <AnalyticsGrid />
            </header>
        </div>
    );
}



export default Home;