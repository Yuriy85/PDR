function sortData(
  data: { position: number; title: string; publishedAt: string }[],
  type: 'name' | 'date' | 'relevance'
) {
  switch (type) {
    case 'name':
      return [...data].sort((a, b) => a.title.localeCompare(b.title));
    case 'date':
      return [...data].sort((a, b) => {
        const firsDate = new Date(a.publishedAt).valueOf();
        const secondDate = new Date(b.publishedAt).valueOf();
        return secondDate - firsDate;
      });
    case 'relevance':
      return [...data].sort((a, b) => a.position - b.position);
  }
}
export default sortData;
