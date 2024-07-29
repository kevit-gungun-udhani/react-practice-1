import './App.css';
import Header from './components/Header';
import Loading from './components/Loading'
import { useEffect, useState, Suspense, lazy, useRef, useMemo} from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Search from './components/Search';
import Card from './components/Card'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [user, setUser] = useState([]);
  let filterList = [];
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUser(res.data);
        setIsLoading(false)
      });
    }, 2000)
  }, [])

  useEffect(() => {
    return () => {
      debouncedVersion.cancel();
    };
  });

  useEffect(() => {
    if(filterList.length > 0){
      setUser(filterList);
    }
  }, [])

  function handleInputChange(event){
    setUserInput(event.target.value)
  }

  const debouncedVersion = useMemo(() => {
    return debounce(handleInputChange, 300);
  }, [])

  if(userInput !== ''){
    filterList = user.filter((user) => user.username.includes(userInput));
  }

  console.log(user)
  console.log(filterList)
  
  return (
    <div>
      <Header />
      <Search onInputChange={debouncedVersion} />
      {isLoading ? <div><Loading/></div> : <ul className=" flex flex-wrap justify-center">
        {user.length > 0 &&
            user.map((user) => {
              return (
                <li className="flex flex-col max-w-56  bg-violet-50 rounded drop-shadow-md m-[2%] p-[1%]" key={user.id}>
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
      </ul>}
    </div>
  );
}

export default App;
