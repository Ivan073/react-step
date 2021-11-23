import { useDrop } from 'react-dnd'
import "./Card.css"

function CardBucket() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  return (
    <div
      ref={drop}
      role={'Dustbin'}
      style={{ backgroundColor: isOver ? 'red' : 'white' }}
      className="bucket"
    >
      {canDrop ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}

export default CardBucket;