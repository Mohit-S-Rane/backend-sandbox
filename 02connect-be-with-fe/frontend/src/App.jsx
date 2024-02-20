import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/jokes').then((res)=>{
      setJokes(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }, [])


  return (
    <>
      <h1>Chai and full stack app</h1>
      <p>Jokes : {jokes.length}</p>

      {jokes.map((joke)=>{
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <h2>{joke.content}</h2>
        </div>
      })}
    </>
  )
}

export default App
