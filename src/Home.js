import React from 'react';
import Navbar from './Navbar'
import putting_data from "./putting.json";
import ViewerCard from './ViewerCard';

const Home = () => {
    return(
        <div className="App">
            <header className="App-header">
                <Navbar />
                <div className='full-card'>
                    <ViewerCard youtubeID={"https://www.youtube.com/watch?v=Wpu0X9XWrt8"} json_data={putting_data}/>
                </div>

                <br/>

                <h1 className="banner">About</h1>

                <div className="about-text">
                    <p className='text'>I wanted to make broadcast models to help people get a head start with real-time analytics projects.</p>
                    <p className='text'>I see "Amaz"-ing companies not wanting to share their models so I hope this provides an option for hobbyists alike.</p>
                    <p className='text'>If I have time I will make models for other sports and showcase the models here.</p>
                    <p className='text'>The weights for the models are available in the Github repo.</p>
                    <p className='text'>Hope you find it useful.</p>
                </div>

            </header>
        </div>
    );
}



export default Home;