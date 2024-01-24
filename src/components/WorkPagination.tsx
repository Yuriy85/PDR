import Pagination from 'react-bootstrap/esm/Pagination';

function WorkPagination({
  setPage,
  buttonNumbers,
  page,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  buttonNumbers: number[];
  page: number;
}) {
  return (
    <Pagination className="our-works__pagination">
      {buttonNumbers.map((number, index) => (
        <Pagination.Item
          onClick={() => setPage(typeof number === 'number' ? number : 1)}
          active={index + 1 === page}
          key={number}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default WorkPagination;
