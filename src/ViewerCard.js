import React from "react";
import VideoPlayer from "./VideoPlayer";
import GolfViewer from "./GolfViewer";

const ViewerCard = (props) => {
    return (
        <div className='analytics-card' draggable={false}>
            <div className='analytics-detail analytics-fill'>
                <VideoPlayer className='video' yid={props.youtubeID}/>
                <div className='analytics-top-view'>
                    <h1 className='banner'>Ball Detection</h1>
                    <GolfViewer locations={props.json_data.ball_locations} end={props.json_data.flag} />
                    <h1 className='banner'>Segmentation</h1>
                    <GolfViewer locations={props.json_data.ball_locations} end={props.json_data.flag} />
                </div>
            </div>
        </div>
    );
}

export default ViewerCard;