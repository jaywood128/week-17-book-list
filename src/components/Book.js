function Book({data}){
  return (

      <div className="card">
          <h5 className="card-header">{data.title}</h5>
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

)}
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
//       const author   = this.getAttribute('author');
//       const publisher = this.getAttribute('publisher');
//       const description = this.getAttribute('description');
      
//       this.addEventListener('click', ()=> alert(`${title} Clicked!`))
//       // const getNamedItem = this.attributes.getNamedItem('title')
//       this.innerHTML = `
//           <div class="card">
//             <h5 class="card-header">${title}</h5>
//             <div class="card-body">
//               <h5>${subtitle}</h5>
//                   <p class="card-text">
//                   <table class="table">
//                       <tr>
//                           <td class="text-success font-weight-bold">Title:</td>
//                           <td>${title}</td>
//                       </tr>
//                       <tr>
//                           <td class="text-success font-weight-bold">Subtitle:</td>
//                           <td>${subtitle}</td>
//                       </tr>
//                       <tr>
//                           <td class="text-success font-weight-bold">Author:</td>
//                           <td>${author}</td>
//                       </tr>
//                       <tr>
//                           <td class="text-success font-weight-bold">Publisher:</td>
//                           <td>${publisher}</td>
//                       </tr>
//                       <tr>
//                           <td class="text-success font-weight-bold">Description:</td>
//                           <td>${description}</td>
//                       </tr>
//                   </table>
//                   </p>
//             </div>
//           </div>
//       `;  
//   }
// }

// // Define the new element
// customElements.define('mit-book', Book);