import { useState } from 'react'
import Button from "./components/Button/Button"
import { data } from "./data"

import "./App.scss"

interface Props{
  state: boolean,
}

interface Data{
     anime: string,
     character: string,
     quote: string,
}
interface Quote{
  activeObject: null | Data,
  objects:Array<Data>
}

const Quotes = ({ state }: Props) => {

  const [Quote, setQuote] = useState<Quote>({
    activeObject: null,
    objects:[...data]
  })

  function setActive(index:number) {
    setQuote({...Quote,activeObject:Quote.objects[index]})
  }

  if (!state) {
   return <></>
  } 
  return (
      <div className='quotes'>
        <ul>
        {Quote.objects.map((quote, i) => <li onClick={() => setActive(i)} key={i.toString()}>{quote.anime} {Quote.objects[i] === Quote.activeObject ? <p className='quote-text '>{ quote.quote}</p> : <p></p> } </li>)}
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
