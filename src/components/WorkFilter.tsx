import { useEffect, useMemo, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import { VideoSnippet } from '../Api/youTube';
import { paginate } from '../utils/pages';
import { search } from '../utils/search';
import sortData from '../utils/sort';

function WorkFilter({
  setPaginateVideos,
  setButtonNumbers,
  setCountPerPage,
  setAutoScroll,
  setShowWheel,
  setPage,
  setVideos,
  countPerPage,
  autoScroll,
  videos,
  page,
}: {
  setPaginateVideos: React.Dispatch<React.SetStateAction<VideoSnippet[]>>;
  setButtonNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  setCountPerPage: React.Dispatch<React.SetStateAction<number>>;
  setAutoScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setShowWheel: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setVideos: React.Dispatch<React.SetStateAction<VideoSnippet[]>>;
  countPerPage: number;
  autoScroll: boolean;
  videos: VideoSnippet[];
  page: number;
}) {
  const defaultCountPerPage = 3;
  const [searchWord, setSearchWord] = useState('');
  const foundVideos = useMemo(() => {
    if (!videos.length) {
      return;
    }
    return search(videos, searchWord);
  }, [videos, searchWord]);

  useEffect(() => {
    if (!foundVideos?.length && searchWord) {
      setShowWheel(true);
    } else setShowWheel(false);
    if (foundVideos) {
      const paginatedVideos = paginate(foundVideos, countPerPage, page);
      setButtonNumbers(paginatedVideos.buttonNumbers);
      setPaginateVideos(paginatedVideos.dataPerPage);
    }
  }, [foundVideos, countPerPage, page]);

  return (
    <div className="our-works__filter">
      <Form.Select
        onChange={(event) => {
          const optionValue = +event.target.value;
          if (optionValue === 0) {
            setAutoScroll(true);
            setCountPerPage(defaultCountPerPage);
          } else {
            setAutoScroll(false);
            setCountPerPage(+event.target.value);
          }
          setPage(1);
        }}
        className="our-works__select"
      >
        <option value={0}>Автопереключение</option>
        <option value={3}>Три работы на страницу</option>
        <option value={5}>Пять работ на страницу</option>
      </Form.Select>
      <Form.Select
        onChange={(event) => {
          if (autoScroll) {
            setCountPerPage(defaultCountPerPage);
          }
          setPage(1);
          switch (event.target.value) {
            case 'relevance':
              setVideos(sortData(videos, 'relevance'));
              break;
            case 'name':
              setVideos(sortData(videos, 'name'));
              break;
            case 'date':
              setVideos(sortData(videos, 'date'));
              break;
          }
        }}
        className="our-works__select"
      >
        <option value="relevance">По релевантности</option>
        <option value="name">По названию</option>
        <option value="date">Сначала новые</option>
      </Form.Select>
      <Form.Control
        onChange={(event) => setSearchWord(event.target.value)}
        className="our-works__search"
        placeholder="Поиск..."
      />
    </div>
  );
}

export default WorkFilter;
