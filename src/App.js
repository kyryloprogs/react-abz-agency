import { useEffect, useState } from 'react';
import Header from './components/Header';
import GetSection from './components/GetSection';
import "./sass/style.scss";
import PostSection from './components/PostSection';

function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [users, setUsers] = useState([]);
  const [countOfPages, setCountOfPages] = useState(1);
  const [positionList, setPositionList] = useState([]);
  const endStatusUpdate = (data) => {
    data.total_pages !== countOfPages && setCountOfPages(data.total_pages);
    setUsers([...users, ...data.users]);
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
      <PostSection positionList={positionList}/>
    </div>
  );
}

export default App;
