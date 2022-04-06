
import { useState } from 'react';

interface Data{
  anime: string,
  character: string,
  quote: string,
}

interface Props{
    state: boolean,
    data:Array<Data>
}

interface Quote{
  activeObject: null | Data,
  objects:Array<Data>
}

export const Quotes = ({ state, data }: Props) => {

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