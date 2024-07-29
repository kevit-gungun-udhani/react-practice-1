import './App.css';
import Header from './components/Header';
import Loading from './components/Loading'
import { useEffect, useState, Suspense, lazy} from 'react';
import axios from 'axios'

const Card = lazy(() => delay(import('./components/Card')))

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 4500);
  }).then(() => promise);
}

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUser(res.data)
      }) //handle ERROR;
  }, [])

  console.log(user)
  return (
    <div>
      <Header />
      <ul className=" flex flex-wrap justify-center">
        {user.length > 0 && (
          <Suspense fallback={<Loading />}>
            {user.map((user) => {
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
          </Suspense>
        )}
      </ul>
    </div>
  );
}

export default App;
