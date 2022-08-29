import { Link, useParams } from "react-router-dom";
function data({data, books, loaded}){
    // for this to work, we would have to be able to fetch the specific book
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let params = useParams();
    // let book = useFakeFetch(`/api/books/${isbn}`);
    // let book = books.filter(book => book.isbn === params.isbn);
    console.log(params.bookId)
    console.log(books)
  return (
      <div className="card">
      <h5 className="card-header">{data.title}</h5>
      {/* <h1> ISBN from useParams: {params.isbn} </h1> */}
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
  </div>)

    
}
export default data;


// Create a class for the element
// Since we inhert from HTMLNode we can add eventlisters, get all attributes of our element
      // Review the properties of an HTML element to see all of the props and methods we get
      //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
      // Learn more about Web Components here
      // https://javascript.works-hub.com/learn/web-components-api-lifecycle-events-and-custom-events-66668


// class Book extends HTMLElement {
//   constructor() {
//       super();
//   }
// // invoked everytime a web component is connected to the DOM
//   connectedCallback() {
//       const title    = this.getAttribute('title');
//       const subtitle = this.getAttribute('subtitle');
    //   const author   = this.getAttribute('author');
    //   const publisher = this.getAttribute('publisher');
    //   const description = this.getAttribute('description');
      
//       this.addEventListener('click', ()=> alert(`${title} Clicked!`))
//       // const getNamedItem = this.attributes.getNamedItem('title')
  
//   }
// }

// // // Define the new element
// customElements.define('mit-data', data);