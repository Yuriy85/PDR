import { useContext, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useNavigate } from 'react-router-dom';
import { getVideos, VideoSnippet } from '../Api/youTube';
import WorkItem from '../components/WorkItem';
import { useFetching } from '../hooks/useFetching';
import data from '../data';
import ScrollToTopButton from '../components/UI/ScrollTopButton';
import { AppDataContext } from '../context';
import { routesPath } from '../router';
import WorkFilter from '../components/WorkFilter';
import WorkPagination from '../components/WorkPagination';
import { empty } from '../assets/img';
import useObserver from '../hooks/useObserver';
import BrandButton from '../components/UI/BrandButton';

function Works() {
  const { setError } = useContext(AppDataContext);
  const navigate = useNavigate();
  const lastElement = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [showWheel, setShowWheel] = useState(false);
  const [countPerPage, setCountPerPage] = useState(2);
  const [page, setPage] = useState(1);
  const [paginateVideos, setPaginateVideos] = useState<VideoSnippet[]>([]);
  const [buttonNumbers, setButtonNumbers] = useState<number[]>([]);
  const [videos, setVideos] = useState<VideoSnippet[]>([]);
  const inView = useObserver(lastElement, autoScroll);
  const [getVideosData, loading, error] = useFetching(async (listApi, key, playlistId) => {
    const videos = await getVideos(listApi as string, key as string, playlistId as string);
    setVideos(videos);
  });

  useEffect(() => {
    if (error && setError) {
      navigate(routesPath.error);
      setError(error);
    } else {
      getVideosData(data.youTubeListApi, data.youTubeApiKey, data.playListId);
    }
  }, [error]);

  useEffect(() => {
    if (lastElement && inView) {
      setCountPerPage(countPerPage + 1);
    }
  }, [inView]);

  return (
    <div className="our-works">
      <div className="our-works__insert"></div>
      <WorkFilter
        setPaginateVideos={setPaginateVideos}
        setButtonNumbers={setButtonNumbers}
        setCountPerPage={setCountPerPage}
        setAutoScroll={setAutoScroll}
        setShowWheel={setShowWheel}
        setVideos={setVideos}
        setPage={setPage}
        countPerPage={countPerPage}
        autoScroll={autoScroll}
        videos={videos}
        page={page}
      />
      <div className={loading ? 'our-works__loader our-works__loader--show' : 'our-works__loader'}>
        <Spinner animation="border" />
      </div>
      {paginateVideos.map((video, index) => (
        <WorkItem key={video.title} video={video} isEven={!!(index % 2)} />
      ))}
      <CSSTransition unmountOnExit in={showWheel} timeout={3000} classNames="--wheel">
        <img src={empty} />
      </CSSTransition>
      <div ref={lastElement}></div>
      {autoScroll && videos.length !== paginateVideos.length ? (
        <BrandButton
          onClick={() => setCountPerPage(countPerPage + 1)}
          disabled={showWheel}
          className="our-works__next-button"
        >
          Дальше
        </BrandButton>
      ) : (
        <WorkPagination setPage={setPage} buttonNumbers={buttonNumbers} page={page} />
      )}
      <ScrollToTopButton className="our-works__icon-to-top" />
    </div>
  );
}

export default Works;
