import { VideoSnippet } from '../Api/youTube';

export function search(
  data: VideoSnippet[],
  searchWord: string
): VideoSnippet[] {
  return data.filter(
    (video) =>
      video.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      video.description.toLowerCase().includes(searchWord.toLowerCase())
  );
}
