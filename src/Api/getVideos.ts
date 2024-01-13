import axios from 'axios';
import data from '../data';

export const getVideos = async (
  key: string,
  playlistId: string
): Promise<string[]> => {
  const videoIds: string[] = [];
  const results: Item[] = (
    await axios.get(data.playListApi, {
      params: {
        key,
        playlistId,
        part: 'contentDetails',
        maxResults: 50,
      },
    })
  ).data.items;

  for (const iterator of results) {
    videoIds.push(iterator.contentDetails.videoId);
  }

  return videoIds;
};
export const getDescriptionById = async (
  key: string,
  id: string
): Promise<string[]> => {
  const results = (
    await axios.get(data.videoApi, {
      params: {
        id,
        key,
        part: 'snippet',
      },
    })
  ).data.items[0].snippet;

  return [results.title, results.description];
};

export type Item = {
  kind: string;
  etag: string;
  id: string;
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  };
};
