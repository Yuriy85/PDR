import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getVideos } from '../Api/getVideos';
import WorksItem from '../components/WorkItem';
import { useFetching } from '../hooks/useFetching';
import { InView } from 'react-intersection-observer';
import { TailSpin } from 'react-loader-spinner';

function Works() {
  const navigate = useNavigate();
  const [videosId, setVideosId] = useState<string[]>([]);
  const [viewVideosId, setViewVideosId] = useState<string[]>([]);
  const [inView, setInView] = useState(false);
  const [idInPlay, setIdInPlay] = useState('');
  const [getVideosData, loading, error] = useFetching(async (url) => {
    const videos = await getVideos(url as string);
    setVideosId(videos);
  });
  const addVideo = () => {
    if (videosId) {
      setViewVideosId(viewVideosId.concat([...videosId].slice(0, 1)));
      setVideosId([...videosId].slice(1));
    }
  };
  useEffect(() => {
    if (inView && videosId.length && !window.location.hash) {
      addVideo();
    }
  }, [inView]);

  useEffect(() => {
    if (error) {
      navigate('/error');
    } else {
      getVideosData();
      navigate('/works');
    }
  }, [error]);

  return (
    <div className="our-works">
      <div className="our-works__insert"></div>
      {loading ? (
        <TailSpin wrapperClass="our-works__loader" color="#f1cdb3" />
      ) : (
        <>
          <TransitionGroup className={'our-works__wrapper'}>
            {viewVideosId.map((videoId, index) => (
              <CSSTransition
                classNames={!!(index % 2) ? '--left' : '--left'}
                timeout={300}
                key={videoId}
              >
                <WorksItem
                  id={videoId}
                  isEven={!!(index % 2)}
                  idInPlay={idInPlay}
                  setIdInPlay={setIdInPlay}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
          <InView className="our-works__button-wrapper" onChange={setInView}>
            <button
              disabled={!videosId.length}
              className="our-works__button"
              onClick={() => {
                navigate('/works');
                addVideo();
              }}
            >
              {!videosId.length ? 'Больше пока нет (' : 'Давай еще'}
            </button>
          </InView>
        </>
      )}
    </div>
  );
}

export default Works;
