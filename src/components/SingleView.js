import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from './Book';
function SingleView({ data, loaded }) {
  // for this to work, we would have to be able to fetch the specific book
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const params = useParams();

  const bookList = data.books;
  const filteredList = bookList.filter((book) => book.isbn === params.bookId);
  const book = filteredList[0];

  return (
    <>
      <div className="container" id="container">
        <h1>{book.title}</h1>
        <Book book={book} loaded={loaded} params={params} />
      </div>
    </>
  );
}
export default SingleView;
