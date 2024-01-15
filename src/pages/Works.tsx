import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getVideos } from '../Api/getVideos';
import WorksItem from '../components/WorkItem';
import { useFetching } from '../hooks/useFetching';
import { InView } from 'react-intersection-observer';
import { TailSpin } from 'react-loader-spinner';
import routesPath from '../router/routes';
import data from '../data';
import ScrollToTopButton from '../components/UI/ScrollTopButton';
import { AppDataContext } from '../context';

function Works() {
  const { setError } = useContext(AppDataContext);
  const navigate = useNavigate();
  const [videosId, setVideosId] = useState<string[]>([]);
  const [viewVideosId, setViewVideosId] = useState<string[]>([]);
  const [inView, setInView] = useState(false);
  const [idInPlay, setIdInPlay] = useState('');
  const [getVideosData, loading, error] = useFetching(
    async (key, playlistId) => {
      const videos = await getVideos(key as string, playlistId as string);
      addVideo(videos);
    }
  );

  function addVideo(videosId: string[]) {
    setViewVideosId(viewVideosId.concat([...videosId].slice(0, 1)));
    setVideosId([...videosId].slice(1));
  }

  useEffect(() => {
    if (inView && videosId.length) {
      addVideo(videosId);
    }
  }, [inView]);

  useEffect(() => {
    if (error) {
      (setError as React.Dispatch<React.SetStateAction<string>>)(error);
      navigate(routesPath.error);
    } else {
      getVideosData(data.apiKey, data.playListId);
    }
  }, [error]);

  return (
    <div className="our-works">
      <div className="our-works__insert"></div>
      {loading ? (
        <TailSpin wrapperClass="our-works__loader" color="#f1cdb3" />
      ) : (
        <>
          <ScrollToTopButton className="our-works__icon-to-top" />
          <TransitionGroup className={'our-works__wrapper'}>
            {viewVideosId.map((videoId, index) => (
              <CSSTransition classNames={'--left'} timeout={300} key={videoId}>
                <WorksItem
                  id={videoId}
                  isEven={!!(index % 2)}
                  idInPlay={idInPlay}
                  setIdInPlay={setIdInPlay}
                  prevVideoId={viewVideosId[index - 1]}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
          <InView className="our-works__button-wrapper" onChange={setInView}>
            <button
              disabled={!videosId.length}
              className="our-works__button"
              onClick={() => {
                addVideo(videosId);
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
