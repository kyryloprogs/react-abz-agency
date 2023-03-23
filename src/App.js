import { useEffect, useState } from 'react';
import Header from './components/Header';
import GetSection from './components/GetSection';
import "./sass/style.scss";
import PostSection from './components/PostSection';
import Footer from './components/Footer';

function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [users, setUsers] = useState([]);
  const [countOfPages, setCountOfPages] = useState(1);
  const [positionList, setPositionList] = useState([]);

  const endStatusUpdate = (data) => {
    data.total_pages !== countOfPages && setCountOfPages(data.total_pages);
    if (pageNumber > 1) {
      setUsers([...users, ...data.users])
    } else {
      setUsers(data.users)
    }
  };

  useEffect(() => {

    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageNumber}&count=6`)
      .then((response) => response.json())
      .then((data) => endStatusUpdate(data))
      .catch((error) => console.log(error));

    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => response.json())
      .then((data) => setPositionList(data.positions))
      .catch((error) => console.log(error));
  }, [pageNumber]);

  return (
    <div className="App">
      <Header />
      <GetSection users={users} pageNumber={pageNumber} setPageNumber={setPageNumber} countOfPages={countOfPages} />
      <PostSection positionList={positionList} setPageNumber={setPageNumber} setUsers={setUsers} />
      <Footer />
    </div>
  );
}

export default App;
