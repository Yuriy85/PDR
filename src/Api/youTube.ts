import axios from 'axios';

export const getVideos = async (
  youTubeListApi: string,
  key: string,
  playlistId: string
): Promise<string[]> => {
  const videoIds: string[] = [];
  const results: Item[] = (
    await axios.get(youTubeListApi, {
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
  youTubeVideoApi: string,
  key: string,
  id: string
): Promise<string[]> => {
  const results = (
    await axios.get(youTubeVideoApi, {
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
