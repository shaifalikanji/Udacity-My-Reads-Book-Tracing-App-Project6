// here we have the contents of Book Component taken from the app.js file initially.
// https://reactjs.org/docs/thinking-in-react.html
// https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down -use the onChange method
// https://stackoverflow.com/questions/44419650/react-js-set-a-default-value-into-a-prop
// to fetch the books and add them to the correct shelf using the value of the book
// using the movingTheShelf method and passing it into onChange method for state
// value={} sets the current state of the book (currently reading, want to read and read) using the props presentShelf
// thumbnails are used for the background image to display the books on screen
// https://www.youtube.com/watch?v=pdoFamR3LSI
// https://www.youtube.com/watch?v=_VFkGk8pJn8
// https://www.youtube.com/watch?v=bpKI3R0nf7E
// https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
// https://www.youtube.com/watch?v=i6L2jLHV9j8
// https://www.youtube.com/watch?v=vftSDWcA6to
// https://www.youtube.com/watch?v=PF8fCAKR0-I&feature=youtu.be

import React from 'react' // importing components


class Book extends React.Component {

   render() {
   	let showingThumbnail = this.props.book.imageLinks ? //variable is passed into url, as url is updated image is displayed
   		this.props.book.imageLinks.thumbnail : '';
    
    return (

    <div className="book">
        <div className="book-top">
          	<div className="book-cover" style={{ width: 128, height: 193, 
          		backgroundImage: `url('${showingThumbnail}'` }}></div>
                
                <div className="book-shelf-changer">               
       			
       			<select onChange={(event) => {this.props.movingTheShelf(
                        	this.props.book, event.target.value
                        )}}
                        
                        value={this.props.presentShelf} 
                       	
                >

                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                        

        	</div>
            

        {/* this will display the title/author of each book on the main page*/}
            
            </div>
            <div className="book-title"> {this.props.book.title}</div>
          	<div className="book-authors"> {this.props.book.authors}</div>
        </div>    


      );
      
   }     

   }


export default Book; //export functions, objects, values from here to use in other programs