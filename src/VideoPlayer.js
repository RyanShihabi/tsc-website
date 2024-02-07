import React, {useRef} from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({width, height, yid}) => {
    const playerRef = useRef(null);

    const handleProgress = (state) => {
        const currentTime = state.playedSeconds;

        if (currentTime >= 12) {
            playerRef.current.seekTo(4);
        }
    };

    const handleStart = () => {
        playerRef.current.seekTo(4, 'seconds');
    }

    return (
        <ReactPlayer
            ref={playerRef}
            url={yid}
            width={"100%"}
            height={"100%"}
            playing={true}
            controls
            onProgress={handleProgress}
            onStart={handleStart}
        />
    );
};

export default VideoPlayer;
