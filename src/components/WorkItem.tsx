import { useContext, useEffect, useState } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { Bars } from 'react-loader-spinner';
import { useFetching } from '../hooks/useFetching';
import { getDescriptionById } from '../Api/getVideos';
import data from '../data';
import { AppDataContext } from '../context';

function WorksItem({
  id,
  isEven,
  idInPlay,
  setIdInPlay,
  prevVideoId,
}: {
  id: string;
  isEven: boolean;
  idInPlay: string;
  setIdInPlay: React.Dispatch<React.SetStateAction<string>>;
  prevVideoId: string;
}) {
  const { endVideoId, setEndVideoId } = useContext(AppDataContext);
  const [videoElement, setVideoElement] = useState<YouTubePlayer>();
  const [isPlay, setIsPlay] = useState(false);
  const [description, setDescription] = useState(['', '']);
  const [anim, setAnim] = useState(false);
  const [getVideoDescription, loading, error] = useFetching(async (key, id) => {
    const description = await getDescriptionById(key as string, id as string);
    setDescription(description);
  });
  useEffect(() => {
    getVideoDescription(data.apiKey, id);
  }, []);
  useEffect(() => {
    if (isPlay && videoElement && id !== idInPlay) {
      videoElement.target.pauseVideo();
    }
  }, [idInPlay]);
  useEffect(() => {
    if (endVideoId === prevVideoId) {
      videoElement.target.playVideo();
    }
  }, [endVideoId]);

  return (
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
            setIdInPlay(id);
          }}
          onReady={(event) => {
            setVideoElement(event);
            setAnim(true);
          }}
          onEnd={() =>
            (setEndVideoId as React.Dispatch<React.SetStateAction<string>>)(id)
          }
          className={
            anim
              ? 'our-works__item-youtube our-works__item-youtube--active'
              : 'our-works__item-youtube'
          }
          iframeClassName="our-works__item-youtube-frame"
          videoId={id}
        />

        {loading ? (
          <Bars color="#f1cdb3" />
        ) : (
          <div
            className={
              isEven
                ? 'our-works__item-wrapper-description'
                : 'our-works__item-wrapper-description our-works__item-wrapper-description--even'
            }
          >
            {error ? (
              <p>{error}</p>
            ) : (
              <>
                <h2>{description[0]}</h2>
                <p>{description[1]}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default WorksItem;
