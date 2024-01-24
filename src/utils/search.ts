export function search(
  data: { title: string; description: string }[],
  searchWord: string
) {
  return data.filter(
    (value) =>
      value.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      value.description.toLowerCase().includes(searchWord.toLowerCase())
  );
}
