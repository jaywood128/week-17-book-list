import Book from './Book';
import { useEffect } from 'react';
const BookList = ({ loaded, data }) => {
  // console.log(data);

  return (
    <div className="container" id="container">
      <h1>Book List</h1>

      {loaded &&
        data.books.map((book) => (
          <Book key={book.isbn} book={book} data={data} loaded={loaded} />
        ))}
    </div>
  );
};
export default BookList;
