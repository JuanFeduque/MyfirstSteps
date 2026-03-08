interface Props {
  name: string;
  quantity: number
}
export const ItemCounter = ({name , quantity}: Props) => {
  




  const handleClick =()=> {
    console.log('click en ${name}')
  }

  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    }}
    >
      
      <span>{name}</span>
      <button onMouseEnter={ handleClick}>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </div>
  )
}

