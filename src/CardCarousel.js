import React from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import putting_data from "./putting.json"
import GolfViewer from './GolfViewer';
import VideoPlayer from './VideoPlayer';
import './App.css';

const data = new Array(10).fill({ youtubeID: "https://www.youtube.com/watch?v=Wpu0X9XWrt8", json_data: putting_data });

const TwitchExample = () => {
  const ref = React.useRef();
  return (
    <div className='twitch'>
      <div style={{ width: '100%', position: 'relative' }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={650}
                carouselWidth={1000}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
        <Fab
          className='twitch-button left'
          size='small'
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className='twitch-button right'
          size='small'
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

export default TwitchExample;

export const Slide = React.memo(function (props) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;
  const [loadDelay, setLoadDelay] = React.useState();
  const [removeDelay, setRemoveDelay] = React.useState();
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (isCenterSlide) {
      clearTimeout(removeDelay);
      setLoadDelay(setTimeout(() => setLoaded(true), 0));
    } else {
      clearTimeout(loadDelay);
      if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 0));
    }
  }, [isCenterSlide]);

  React.useEffect(() => {
    clearTimeout(removeDelay);
    clearTimeout(loadDelay);
  });

  const { youtubeID, json_data } = data[dataIndex];

  return (
    <div className='card' draggable={false}>
      <div className={`cover fill ${isCenterSlide && loaded ? 'off' : 'on'}`}>
        <div
          className='card-overlay fill'
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      {loaded && (
        <div className='detail fill'>
          {/* <img className='video' src={video} /> */}
          <VideoPlayer className='video' yid={youtubeID} width={460} height={300}/>
          <div className='top-view'>
            <GolfViewer locations={json_data.ball_locations} end={json_data.flag} />
          </div>
        </div>
      )}
    </div>
  );
});