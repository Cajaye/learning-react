import { useState } from 'react'
import Button from "./components/Button/Button"
import { Quotes } from './components/Quote/Quote'
import { data } from "./data"

import "./App.scss"

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <main>
      <section>
        <h1>Hello World</h1>
         <Button onClick={() => setToggle(!toggle)}>Anime</Button>
      </section>
      <Quotes data={data} state={toggle}/>
    </main>
 )
}



export default App
