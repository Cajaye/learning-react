import { useState } from 'react'
import { Button } from "./components/Button/Button"
import { data } from "./data"

import "./App.scss"

interface Props{
  state: boolean,
}

const Quotes = ({ state }: Props) => {
  if (!state) {
   return <></>
  } 
  return (
      <div className='quotes'>
        <ul>
        {[...data].map((quote,i) => <li key={i.toString()}>{quote.anime}</li>)}
        </ul>
      </div>
    
    )
}

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <main>
      <section>
        <h1>Hello World</h1>
         <Button onClick={() => setToggle(!toggle)}>Anime</Button>
      </section>
        <Quotes state={toggle}/>
    </main>
 )
}



export default App
