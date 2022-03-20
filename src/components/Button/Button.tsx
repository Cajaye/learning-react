import "./Button.scss"

interface Props{
  onClick: () => void,
  children:string
}

export const Button = ({ onClick,children }: Props) => {
  return (
    <button
      className='btn'
      onClick={onClick}>{ children}</button>
  )
}