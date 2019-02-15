// state: main page displays the books on the web page.
// here we have the contents of MainPage Component, it shows 3 shelves and each book is shown on the correct shelf. This code is
// taken from the app.js file initially.
// main page allows users to move between shelves, can move book to a different shelf.
// if the browser is refreshed, same information is shown on page.
// https://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs
// https://facebook.github.io/react-native/docs/props
// https://reactjs.org/docs/thinking-in-react.html
// https://www.youtube.com/watch?v=pdoFamR3LSI
// https://www.youtube.com/watch?v=_VFkGk8pJn8
// https://www.youtube.com/watch?v=bpKI3R0nf7E
// https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
// https://www.youtube.com/watch?v=i6L2jLHV9j8
// https://www.youtube.com/watch?v=vftSDWcA6to
// https://www.youtube.com/watch?v=PF8fCAKR0-I&feature=youtu.be



import React from 'react' 
import Book from './Book'; //importing components from Book
import { Link } from 'react-router-dom'


class MainPage extends React.Component {

	render() {
		console.log(this.props.allBooks) //this will display the allBooks array on the console with the books
		return (


          //display this main page if the showSearchPage condition is false

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>




                			{/*******Currently Reading SHELF***********/}
{/* from allBooks array, filter out books "currentlyReading" and create new array of books listed on "currentlyReading" shelf
and for each book must create a unique key id using (allBooks.id) */}
{/*for books to display, we need to pass data in order to display it using the background image thumbnail, 
and the title/author of the book */}
{/*currentShelf is a prop we can use in the Book.js file in the value to define what shelf the books are currently on */}
{/* for each shelf: pass the movingTheShelf method and this method is called when we change the books from one shelf to another
so each time a books status using the .map on the shelf is changed an event is called and the onChange method is run*/}
{/*the select element holds a value which is the list of shelves each book has access to when right clicked on each book*/}
                                          


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                 {	

                this.props.allBooks.filter (book => book.shelf === 'currentlyReading')
                .map(book => (
                   	
                 	<li key={book.id} >                                         
                      	<Book

						book={book}
						movingTheShelf={this.props.movingTheShelf} 
						presentShelf="currentlyReading"

                      	/> 
                    </li>
					
					))

                }      






                    </ol>
                  </div>
                </div>


                			{/*******WANT TO READ SHELF ***********/}
{/* from allBooks array, filter out books "wantToRead" and create new array of books listed on "wantToRead" shelf
and for each book must create a unique key id using (allBooks.id) */}
{/*for books to display, we need to pass data in order to display it using the background image thumbnail, 
and the title/author of the book */}
{/* for each shelf: pass the movingTheShelf method and this method is called when we change the books from one shelf to another
so each time a books status using the .map on the shelf is changed an event is called and the onChange method is run*/}
{/*the select element holds a value which is the list of shelves each book has access to when right clicked on each book*/}
                                          
           

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     

                {	

                this.props.allBooks.filter (book => book.shelf === 'wantToRead')
                .map(book => (
                   	
                 	<li key={book.id} >                                         
                      	<Book
						
						book={book}
						movingTheShelf={this.props.movingTheShelf}
						presentShelf="wantToRead"

                      	/> 
                    </li>
					
					))

                }
                    
                    </ol>
                  </div>
                </div>



                			{/*******READ SHELF ***********/}
{/* from allBooks array, filter out books "Read" and create new array of books listed on "Read" shelf
and for each book must create a unique key id using (allBooks.id) */}
{/*for books to display, we need to pass data in order to display it using the background image thumbnail, 
and the title/author of the book */}
{/* for each shelf: pass the movingTheShelf method and this method is called when we change the books from one shelf to another
so each time a books status using the .map on the shelf is changed an event is called and the onChange method is run*/}
{/*the select element holds a value which is the list of shelves each book has access to when right clicked on each book*/}
                                          

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                      
				
				{	

                this.props.allBooks.filter (book => book.shelf === 'read')
                .map(book => (
                   	
                 	<li key={book.id} >                                         
                      	<Book
						
						book={book}
						movingTheShelf={this.props.movingTheShelf}
						presentShelf="read"

                      	/> 
                    </li>
					
					))

                }

                    
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              
             <Link
              	to='/search'
              	
              >Add a book</Link>
            

            </div>
          </div>	




		);

	}

}


export default MainPage; // export functions, objects, values from here to use in other programs