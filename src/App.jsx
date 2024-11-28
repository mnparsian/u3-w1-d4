import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import Books from "./data/fantasy.json"

function App() {
  return (
    <>
      <MyNav />
      <Welcome/>
      <div>
        <BookList books={Books} />
    </div>
      <MyFooter/>
    </>
  );
}

export default App;
