import "./Button.scss"

interface Props{
  onClick: () => void,
  children:string
}

const Button = ({ onClick,children }: Props) => {
  return (
    <button
      className='btn'
      onClick={onClick}>{ children}</button>
  )
}

export default Button;
