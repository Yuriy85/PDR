import { VideoSnippet } from '../Api/youTube';

export function search(data: VideoSnippet[], searchWord: string) {
  return data.filter(
    (value) =>
      value.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      value.description.toLowerCase().includes(searchWord.toLowerCase())
  );
}
