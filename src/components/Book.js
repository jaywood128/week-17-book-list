import { Link, useParams } from "react-router-dom";
function data({data, loaded}){
    // for this to work, we would have to be able to fetch the specific book
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let params = useParams();
    // This is how you would actually fetch a book from your server instead of the data.json file
    // let book = useFakeFetch(`/api/books/${isbn}`);
   
    console.log("Params bookId" + params.bookId)
    
    const myRender = () => {
        if(loaded){
            console.log(data.books)
            let book = data.books.filter(book => book.isbn == params.bookId);
            console.log('Book' + book);
            return (
                       <div className="card">
      <h5 className="card-header">{book.title}</h5>
      <div className="card-body">
      <h5>{data.subtitle}</h5>

          <table className="table">
            <tbody>
              <tr>
                  <td className="text-success font-weight-bold">Title:</td>
                  <td>{data.title}</td>
              </tr>
              <tr>
                  <td className="text-success font-weight-bold">Subtitle:</td>
                  <td>{data.subtitle}</td>
              </tr>
              <tr>
                  <td className="text-success font-weight-bold">Author:</td>
                  <td>{data.author}</td>
              </tr>
              <tr>
                  <td className="text-success font-weight-bold">Publisher:</td>
                  <td>{data.publisher}</td>
              </tr>
              <tr>
                  <td className="text-success font-weight-bold">Description:</td>
                  <td>{data.description}</td>
              </tr>
            </tbody>
          </table>

      </div>
  </div>
                
            )
          } else{
            return <h1>Loading</h1>
          }
    }
  return (
      <div>
        {myRender()}

      </div>
   
  );
}

export default data;