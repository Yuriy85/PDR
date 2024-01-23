import axios from 'axios';

export type VideoSnippet = {
  position: number;
  title: string;
  description: string;
  publishedAt: string;
  resourceId: { videoId: string };
};

export const getVideos = async (
  youTubeListApi: string,
  key: string,
  playlistId: string
): Promise<VideoSnippet[]> => {
  const result = (
    await axios.get(youTubeListApi, {
      params: {
        key,
        playlistId,
        part: 'snippet',
        maxResults: 50,
      },
    })
  ).data;
  return result.items.map(
    (result: { snippet: VideoSnippet }) => result.snippet
  );
};
