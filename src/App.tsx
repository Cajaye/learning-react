import React, { useState } from 'react'
import { Button } from "./components/Button/Button"

interface Greeting{
  state: boolean,
  names:string []
}

function Greeting({ state, names }: Greeting) {
  if (state) {
    return (
      <>
        <h1>Hello</h1>
        <ul>
          {[...names].map((name) => <li key={name}>{name}</li>)}
        </ul>
      </>
    
    )
  } 
  return <h1></h1>
}

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <main>
      <Button onClick={() => setToggle(!toggle)} />
      <Greeting state={toggle} names={["Cajaye","John","Joe","Lee"]}/>
    </main>
 )
}



export default App
