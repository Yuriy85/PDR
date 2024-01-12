import { useEffect, useState } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { Bars } from 'react-loader-spinner';
import { useFetching } from '../hooks/useFetching';
import { getDescriptionById } from '../Api/getVideos';

function WorksItem({
  id,
  isEven,
  idInPlay,
  setIdInPlay,
}: {
  id: string;
  isEven: boolean;
  idInPlay: string;
  setIdInPlay: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [videoElement, setVideoElement] = useState<YouTubePlayer>();
  const [isPlay, setIsPlay] = useState(false);
  const [description, setDescription] = useState(['', '']);
  const [anim, setAnim] = useState(false);
  const [getVideoDescription, loading, error] = useFetching(async (id) => {
    const description = await getDescriptionById(id as string);
    setDescription(description);
  });
  useEffect(() => {
    getVideoDescription(id);
  }, []);
  useEffect(() => {
    if (isPlay && videoElement && id !== idInPlay) {
      videoElement.target.pauseVideo();
    }
  }, [idInPlay]);
  return (
    <div className={isEven ? 'work-item' : 'work-item work-item--even'}>
      <div
        className={
          !isEven
            ? 'work-item__wrapper'
            : 'work-item__wrapper work-item__wrapper--even'
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
          className={
            anim
              ? 'work-item__youtube work-item__youtube--active'
              : 'work-item__youtube'
          }
          iframeClassName="work-item__youtube-frame"
          videoId={id}
        />

        {loading ? (
          <Bars visible={loading} color="#f1cdb3" />
        ) : (
          <div
            className={
              isEven
                ? 'work-item__wrapper-description'
                : 'work-item__wrapper-description work-item__wrapper-description--even'
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
