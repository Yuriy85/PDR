export function paginate<T>(data: T[], countPerPage: number, page: number) {
  if (countPerPage <= 0) {
    return { buttonNumbers: [], dataPerPage: [data[0]] };
  }

  const pageCount = Math.ceil(data.length / countPerPage);
  if (page > pageCount) {
    return { buttonNumbers: [], dataPerPage: data };
  }

  const buttonNumbers: number[] = [];
  const result: T[][] = [];

  for (let index = 0; index < pageCount; index++) {
    buttonNumbers.push(index + 1);
    result.push(
      data.slice(index * countPerPage, index * countPerPage + countPerPage)
    );
  }

  return {
    buttonNumbers: buttonNumbers,
    dataPerPage: result[page - 1],
  };
}
