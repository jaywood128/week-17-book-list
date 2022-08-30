import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
function Book({ loaded, book }) {
  
  // for this to work, we would have to be able to fetch the specific book
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // let params = useParams();
  // let book = useFakeFetch(`/api/books/${isbn}`);


  return loaded ? (
    <div className="card">
      <div className="card-body">
        <h5>{book.subtitle}</h5>

        <table className="table">
          <tbody>
            <tr>
              <td className="text-success font-weight-bold">Title:</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <td className="text-success font-weight-bold">Subtitle:</td>
              <td>{book.subtitle}</td>
            </tr>
            <tr>
              <td className="text-success font-weight-bold">Author:</td>
              <td>{book.author}</td>
            </tr>
            <tr>
              <td className="text-success font-weight-bold">Publisher:</td>
              <td>{book.publisher}</td>
            </tr>
            <tr>
              <td className="text-success font-weight-bold">Description:</td>
              <td>{book.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <h2>Test</h2>
  );
}
export default Book;

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
