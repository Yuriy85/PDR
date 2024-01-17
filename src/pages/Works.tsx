import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getVideos } from '../Api/youTube';
import WorksItem from '../components/WorkItem';
import { useFetching } from '../hooks/useFetching';
import { InView } from 'react-intersection-observer';
import { TailSpin } from 'react-loader-spinner';
import data from '../data';
import ScrollToTopButton from '../components/UI/ScrollTopButton';
import { AppDataContext } from '../context';
import BrandButton from '../components/UI/BrandButton';
import { routesPath } from '../router';

function Works() {
  const navigate = useNavigate();
  const { setError } = useContext(AppDataContext);
  const [videosId, setVideosId] = useState<string[]>([]);
  const [viewVideosId, setViewVideosId] = useState<string[]>([]);
  const [inView, setInView] = useState(false);
  const [idInPlay, setIdInPlay] = useState('');
  const [getVideosData, loading, error] = useFetching(
    async (listApi, key, playlistId) => {
      const videos = await getVideos(
        listApi as string,
        key as string,
        playlistId as string
      );
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
      getVideosData(data.youTubeListApi, data.youTubeApiKey, data.playListId);
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
            <BrandButton
              disabled={!videosId.length}
              className="our-works__button"
              onClick={() => {
                addVideo(videosId);
              }}
            >
              {!videosId.length ? 'Больше пока нет (' : 'Давай еще'}
            </BrandButton>
          </InView>
        </>
      )}
    </div>
  );
}

export default Works;
