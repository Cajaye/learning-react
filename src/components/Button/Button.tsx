import "./Button.scss"

interface Button{
  onClick: () => void,
}

export function Button({ onClick }: Button) {
  return (
    <button
      className='btn'
      onClick={onClick}>Toggle 🚀</button>
  )
}