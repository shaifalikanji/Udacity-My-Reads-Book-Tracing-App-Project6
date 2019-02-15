// state: list of books are changed from currently reading, want to read and reading.
// states reside in the App.js file
// https://reactjs.org/docs/react-component.html#componentdidmount
// https://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs
// https://facebook.github.io/react-native/docs/props
// https://www.youtube.com/watch?time_continue=70&v=W-udVlRApio
// https://www.youtube.com/watch?v=pdoFamR3LSI
// https://www.youtube.com/watch?v=_VFkGk8pJn8
// https://www.youtube.com/watch?v=bpKI3R0nf7E
// https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
// https://www.youtube.com/watch?v=i6L2jLHV9j8
// https://www.youtube.com/watch?v=vftSDWcA6to
// https://www.youtube.com/watch?v=PF8fCAKR0-I&feature=youtu.be

import React from 'react';
import { Switch, Route } from 'react-router-dom'; //import route component to route between your pages and render UI

import * as BooksAPI from './BooksAPI';
import './App.css'
import MainPage from './MainPage' ;//importing components from MainPage
import SearchPage from './SearchPage'; ////importing components from SearchPage

class BooksApp extends React.Component {
  state = {
    allBooks: [] //array of books will be used when we create a loop (map) to loop over each book and add them to different shelves
                  //this will also be used in the onchange method.
  }

    componentDidMount() { // once the web page is loaded, this method is called by React and all the books will be displayed
      BooksAPI.getAll().then((allBooks) => {
        this.setState({ allBooks: allBooks })
      })

    }

    //creating a method which will be passed into the search page, this helps us create state for the allBooks array
    //this will be passed into the <MainPage/> as props under the different shelves (currentlyReading, wantingToRead and read)
    //this will also be passed into the book.js file using the onChange method.
    //update method is used to update the books on the shelf as they are selected
    //this entire method will be used in the component for (Book.js)
    
    movingTheShelf = (book, shelf) => {

      BooksAPI.update(book, shelf); //using the update method to update the books on the shelf. this updates the state. 
                                    //this method is used in other components such as the Book.js file


       BooksAPI.getAll().then((allBooks) => { //this will update the web page after the books are changed from one shelf to another
        this.setState({ allBooks: allBooks })
      })

    }
    
   //in the BooksAPI file (line #20), calling the (getAll) method to get/fetch all the books and put them in the allBooks array
  // https://stackoverflow.com/questions/31072841/componentdidmount-method-not-triggered-when-using-inherited-es6-react-class
  /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  // showSearchPage: false // if this is true then display the search page and if it not then display the main page.
  //if the books are updated from one shelf to another this means the shelf is changing which means we have a state.
  

  render() {
    
    //console.log(this.state.allBooks) : this message will show the array of books
    //https://www.youtube.com/watch?v=NlHLfRb6T_E
    //https://www.youtube.com/watch?time_continue=1&v=KsuuFWh1VAg
    //https://reacttraining.com/react-router/web/guides/quick-start


    return (

      <div className="app">

     <Switch>

      <Route exact path={'/'} component={MainPage}/> {/*route the page to the main page component*/}
      
      <Route exact path={'/search'} component={SearchPage}/> {/*route the page to the main page component*/}

      </Switch>

      </div>

    );

  }
}

export default BooksApp













      


