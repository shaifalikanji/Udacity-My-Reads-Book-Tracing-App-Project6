// state: search page can be used to add your queries and list of books on different shelves. 

// here we have the contents of SearchPage Component taken from the app.js file initially.
// https://reactjs.org/docs/thinking-in-react.html
// https://stackoverflow.com/questions/52845894/passing-components-state-to-query-variables-inside-react-apollos-compose
// install npm install --save escape-string-regexp : this installation will use regexpressions to filter the books on the search menue
// https://www.youtube.com/watch?time_continue=1&v=xIlkBGmRq0g
// https://www.youtube.com/watch?v=pdoFamR3LSI
// https://www.youtube.com/watch?v=_VFkGk8pJn8
// https://www.youtube.com/watch?v=bpKI3R0nf7E
// https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
// https://www.youtube.com/watch?v=i6L2jLHV9j8
// https://www.youtube.com/watch?v=vftSDWcA6to
// https://www.youtube.com/watch?v=PF8fCAKR0-I&feature=youtu.be



import React from 'react'; // importing components
import * as BooksAPI from './BooksAPI';
import Book from './Book' //importing components from Book
import { Link } from 'react-router-dom';

// https://www.youtube.com/watch?time_continue=1&v=xIlkBGmRq0g
// https://www.youtube.com/watch?time_continue=213&v=1Tkb9SGkOgI
// https://www.youtube.com/watch?time_continue=9&v=ut3jxLunZz0

class SearchPage extends React.Component {
	state = {
		query: '',
		booksSearched: [] //using the search method to search books and those books will reside in this array
	}

	updateQuery =(query) => { //updateQuery method/ when the user types in the search bar, the onChange method is called and the
		this.setState({		  // state changes and the books will be taken from the list and add them to the booksSearched array.
			query: query
		})
		this.updateBooksSearched(query);
	}


	updateBooksSearched = (query) => { //get the books and the query change and booksSearched state will change to have the correct list of books
	
	if (query) { //if there is something to be searched add the books in the booksSearched array
		BooksAPI.search(query).then((booksSearched)  => { //use the search method
			if (booksSearched.error) { //if the search letters dont match the books 
				this.setState({ booksSearched: [] }); //show the state as a  empty booksSearched array
		
			} else { //if the search letter do match the books

				this.setState({booksSearched: booksSearched}) //show the state with books in the booksSearched array
			}

	})

	} else { //if there is nothing to be searched keep the booksSearched array empty
		this.setState({booksSearched: []});

	}

}


// https://www.youtube.com/watch?time_continue=43&v=aOfohwGbL-A
render() {
    return (
		
    	// display this search page if the showSearchPage condition is true
    	// https://www.youtube.com/watch?time_continue=75&v=V3kc4Sz1GII
    	//change to link for router-dom

		<div className="search-books">
            <div className="search-books-bar">
              
              
              <Link
              	to='/'
              	className='close-search'
             
             >Close</Link>

              
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author"
                	value={this.state.query} 
                	onChange={(event) => {this.updateQuery(event.target.value)} 
                	//as users use the search menue to search for books, the updateQuery method will change the state


                }

                />


              </div>



          </div>

            <div className="search-books-results">
              <ol className="books-grid"> 


            {/*https://www.youtube.com/watch?v=1Tkb9SGkOgI
            from the booksSearched array a list of books will be shown on the search page on screen. key is set to give each book
            a unique.id */}

          {/* using the let noShelf variable, all books that are not on a specific shelf address it as "none" */}

              	{
              		this.state.booksSearched.map(booksSearched => {
              		  
                    let noShelf = "none"; //the book is not on any shelf at this time

                    this.props.allBooks.map(book => (
                      book.id === booksSearched.id ? //truthy? //if the current book is on a shelf it will also be displayed on the allBooks array
                      noShelf = book.shelf : '' // falsey ? if the book is not on the shelf, nothing will happen


                      ));
                    

                    return(
                        <li key={booksSearched.id}>
                        <Book

                    book={booksSearched} 
                    movingTheShelf={this.props.movingTheShelf}
                    presentShelf={noShelf}
                                  			
                    />
              		</li>

              	);

              })

              }

              	</ol>
            </div>

          </div>

        );


    }

}


export default SearchPage; // export functions, objects, values from here to use in other programs