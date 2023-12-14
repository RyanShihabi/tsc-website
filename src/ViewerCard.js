import React from "react";
import VideoPlayer from "./VideoPlayer";
import GolfViewer from "./GolfViewer";

const ViewerCard = (props) => {
    return (
        <div className='analytics-card' draggable={false}>
            <div className='analytics-detail analytics-fill'>
                <VideoPlayer className='video' yid={props.youtubeID} width={300} height={184}/>
                <div className='analytics-top-view'>
                    <GolfViewer locations={props.json_data.ball_locations} end={props.json_data.flag} />
                </div>
            </div>
        </div>
    );
}

export default ViewerCard;