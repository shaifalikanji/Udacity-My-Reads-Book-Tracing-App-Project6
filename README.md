### Udacity-My-Reads-Book-Tracing-App-Project6

### Initial set-up

1.	Download project
2.	Your main goal is to focus on using React, using the current provided code in app.js, add the code to the correct component files. The code in each component should only focus on its role in the app. In order for all the components to function they must be addressed at the app.js file.
3.	Remember the project initially is a JavaScript mockup and you have to use a React-App to complete the project.
4.	Cd into project
5.	npm install - npm is the package manager for JavaScript and a software registry that allows you to install, share and distribute packages of reusable code
6.	npm start – command allows the script in the package.json file to run the application in your browser. The browser will update the browser content live as you make changes throughout your code. 

### Focus points

1.	Break your project into different components.
2.	Build a static version of your app in React by taking the components you have initially created and reusing them to pass data using props. Props are used to pass data from a parent to child in React. In this step your app will not have any user interactivity enabled.
3.	Identify the state you need for which component (data that needs to be updated when your page is refreshed eg, user enters text in the search menu). If data does not change it is not a state.
a.	There are 3 states you will need: list of books, query(search) and list of books that are searched. In each of the 3 states that data is changed.

4.	Identify which component should own what state.
5.	Then focus on adding interactivity for users.

### Requirements

1.	Main page: Create a SINGLE main page component
  a.	main page (main shelf) – main book shelf
  b.	title – main heading of the book shelf
  c.	shelve one – each shelve has books on it
  d.	shelve two – each shelve has books on it
  e.	shelve three – each shelve has books on it


2.	Search page: create a SINGLE search component. 
The search menu is used to display books that show up based on the users search results of different books.
a.	input field – with a back button
b.	as the user searches books, they will be displayed here without any shelves.


3.	Book Component: create a SINGLE book component


4.	Routing: this allows the user to view books and click on the search menu to search for books and return to the original main page.

  a.	The goal of routing is to display either component on the screen as per the root file.
  b.	Using  <Route path>

### How to start:

1.	App.js file
  a.	Create a main page component file
    i.	Create a book page component file
  b.	Create a search component file
    i.	Create a book page component file 

### Methods you can use to communicate with the backend server


1.	getAll

-This method takes all the books that are currently on the book shelf 
-Returns a Promise which resolves to a JSON object containing a collection of book objects.
-This collection represents the books currently in the bookshelves in your app.

2.	Update (book, shelf)

-This method moves your books from one shelf to another
-book: `<Object>` containing at minimum an `id` attribute
-shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
-Returns a Promise which resolves to a JSON object containing the response data of the POST request


3.	Search(query)

-This method is used to search and return a collection of the books that are requested using the search bar. 
-query: `<String>`
-Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
-These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### References

https://devhints.io/react
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
https://facebook.github.io/react-native/docs/props
https://stackoverflow.com/questions/44419650/react-js-set-a-default-value-into-a-prop
https://www.youtube.com/watch?time_continue=1&v=xIlkBGmRq0g
https://www.youtube.com/watch?time_continue=213&v=1Tkb9SGkOgI
https://www.youtube.com/watch?time_continue=9&v=ut3jxLunZz0
https://www.youtube.com/watch?time_continue=70&v=W-udVlRApio
https://www.youtube.com/watch?v=pdoFamR3LSI
https://www.youtube.com/watch?v=_VFkGk8pJn8
https://www.youtube.com/watch?v=bpKI3R0nf7E
https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
https://www.youtube.com/watch?v=i6L2jLHV9j8
https://www.youtube.com/watch?v=vftSDWcA6to
https://www.youtube.com/watch?v=PF8fCAKR0-I&feature=youtu.be
https://reactjs.org/docs/thinking-in-react.html
https://reactjs.org/docs/introducing-jsx.html
https://reactjs.org/docs/rendering-elements.html
https://reactjs.org/docs/components-and-props.html
www.reactjs.org
https://reactjs.org/docs/state-and-lifecycle.html
https://reactjs.org/docs/handling-events.html
https://reactjs.org/docs/conditional-rendering.html
https://reactjs.org/docs/lists-and-keys.html
https://reactjs.org/docs/forms.html
https://reactjs.org/docs/lifting-state-up.html



