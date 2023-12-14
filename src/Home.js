import React from 'react';
import CardCarousel from './CardCarousel';
import Navbar from './Navbar'
import Grid from "./Grid"

const Home = () => {
    return(
        <div className="App">
            <header className="App-header">
                <Navbar />
                <CardCarousel />
                <Grid />
            </header>
        </div>
    );
}



export default Home;