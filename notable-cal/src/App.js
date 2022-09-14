import { useState, useEffect} from 'react';
import axios from 'axios';
import Docs from './Docs';


function App() {
  const [docs, setDocs] = useState([]);
  const [error, setError] = useState(null);

useEffect(() => {
  axios('http://localhost:3001/docs')
  .then((res) => {
    setDocs(res.data);
    setError(null)
  })
  .catch(setError);
}, []);

if (error) return <p>Oops! An error occurred. ☹️</p>

  return (
    <div className="App">
      {docs.map(({ id, physician, patients, email, listName}) => (
        <Docs
          key={id}
          physician={physician}
          // patients={patients}
          email={email}
          listName={listName}
        />
      ))}
    </div>
  );
}

export default App;
