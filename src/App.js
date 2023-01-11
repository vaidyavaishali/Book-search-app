// import logo from './logo.svg';
import './App.css';
import BookSearch from './BookSearch/BookSearch';
// import BookDetails from './BookSearchContextAPI/BookProvider';
// import SearchBook from './BookSearch/SearchBook';

function App() {
  return (
    <div className="App">
      <BookSearch/>
      {/* <SearchBook/> */}
      <BookDetails/>
     
    </div>
  );
}

export default App;
