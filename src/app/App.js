import List from "../components/List";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

import "../styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Search />
      <List />
      <Pagination />
    </div>
  );
};

export default App;
