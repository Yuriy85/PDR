import axios from 'axios';

export const getVideos = async (
  url = 'https://content-youtube.googleapis.com/youtube/v3/playlistItems'
): Promise<string[]> => {
  const videoIds: string[] = [];
  const results: Item[] = (
    await axios.get(url, {
      params: {
        key: 'AIzaSyCkJRZ_7fr43gfQVrw8CuwWxmpwWUKCBFo',
        playlistId: 'PLHri6D4H6-d79mD-9waX8WAxICRI_G5e-',
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
  id: string,
  url = 'https://content-youtube.googleapis.com/youtube/v3/videos'
): Promise<string[]> => {
  const results = (
    await axios.get(url, {
      params: {
        id,
        key: 'AIzaSyCkJRZ_7fr43gfQVrw8CuwWxmpwWUKCBFo',
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
