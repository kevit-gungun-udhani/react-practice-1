import './App.css';
import Header from './components/Header';
import Loading from './components/Loading'
import { useEffect, useState, Suspense, lazy, useRef, useMemo, useCallback} from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Search from './components/Search';
import Card from './components/Card'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [originalUser, setOriginalUser] = useState([]);
  
 
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUser(res.data);
        setOriginalUser(res.data);
        setIsLoading(false)
      });
    }, 2000)
  }, [])

  function handleSearch(query) {
    if (query === '') {
      setUser(originalUser);
      setIsLoading(false);
    } else {
       setUser(
         originalUser.filter((user) =>
           user.name.toLowerCase().includes(query.toLowerCase())
         )
      );
      setIsLoading(false);
    }
  }

  const debouncedHandleSearch = debounce(handleSearch, 500);

  const handleInputChange = (query) => {
     setIsLoading(true);
     debouncedHandleSearch(query);
   };
   console.log(user)
  return (
    <div>
      <Header />
      <Search onInputChange={handleInputChange} />
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
        <ul className=" flex flex-wrap justify-center">
          {user.length > 0 &&
            user.map((user) => {
              return (
                <li
                  className="flex flex-col max-w-56 bg-violet-50 rounded drop-shadow-md m-[2%] p-[1%] border-indigo-200 border-2"
                  key={user.id}
                >
                  <Card
                    userName={user.username}
                    company={user.company.name}
                    fullName={user.name}
                    email={user.email}
                    phone={user.phone}
                  />
                </li>
              );
            })}
        </ul>
        </>
      )}
    </div>
  );
}

export default App;
