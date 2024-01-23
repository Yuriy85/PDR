import { useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { VideoSnippet } from '../Api/youTube';
import { AppDataContext } from '../context';

function WorkItem({ video, isEven }: { video: VideoSnippet; isEven: boolean }) {
  const { idInPlay, setIdInPlay } = useContext(AppDataContext);
  const [videoElement, setVideoElement] = useState<YouTubePlayer>();
  const [isPlay, setIsPlay] = useState(false);
  const [anim, setAnim] = useState(false);
  const [mount, setMount] = useState(false);
  const videoId = video.resourceId.videoId;

  useEffect(() => {
    if (!mount) {
      setMount(true);
    }
    if (isPlay && videoId !== idInPlay) {
      videoElement.target.pauseVideo();
    }
  }, [idInPlay, isPlay]);

  return (
    <CSSTransition in={mount} timeout={300} classNames="--left">
      <div
        className={
          isEven ? 'our-works__item' : 'our-works__item our-works__item--even'
        }
      >
        <div
          className={
            !isEven
              ? 'our-works__item-wrapper'
              : 'our-works__item-wrapper our-works__item-wrapper--even'
          }
        >
          <YouTube
            onPlay={() => {
              setIsPlay(true);
              (setIdInPlay as React.Dispatch<React.SetStateAction<string>>)(
                videoId
              );
            }}
            onReady={(event) => {
              setVideoElement(event);
              setAnim(true);
            }}
            className={
              anim
                ? 'our-works__item-youtube our-works__item-youtube--active'
                : 'our-works__item-youtube'
            }
            iframeClassName="our-works__item-youtube-frame"
            videoId={videoId}
          />
          <div
            className={
              isEven
                ? 'our-works__item-wrapper-description'
                : 'our-works__item-wrapper-description our-works__item-wrapper-description--even'
            }
          >
            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default WorkItem;
