import Pagination from 'react-bootstrap/esm/Pagination';

function WorkPagination({
  setCountPerPage,
  setPage,
  buttonNumbers,
  countPerPage,
  autoScroll,
  page,
}: {
  setCountPerPage: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  buttonNumbers: number[];
  countPerPage: number;
  autoScroll: boolean;
  page: number;
}) {
  return (
    <Pagination className="our-works__pagination">
      {autoScroll ? (
        <Pagination.Item onClick={() => setCountPerPage(countPerPage + 1)}>
          Дальше
        </Pagination.Item>
      ) : (
        buttonNumbers.map((number, index) => (
          <Pagination.Item
            onClick={() => setPage(typeof number === 'number' ? number : 1)}
            active={index + 1 === page}
            key={number}
          >
            {number}
          </Pagination.Item>
        ))
      )}
    </Pagination>
  );
}

export default WorkPagination;
