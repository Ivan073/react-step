import { useDrop} from 'react-dnd'
import "./Card.css"
import { useState } from 'react';
import Card from "./Card"

function CardBucket(props) {
  const [bucket,setBucket] = useState([]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    

    drop: (item,monitor)=>{
      console.log("drop");
      setBucket([...bucket,{id:item.id, text:item.text}])
      
      //console.log(monitor.getDropResult());
      return item;
    },

    // Props to collect

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  return (
    <div
      ref={drop}
      role={'Box'}
      style={{ backgroundColor: isOver ? 'red' : 'white' }}
      className="bucket"
      id={props.id}
    >
      {canDrop ? 'Release to drop' : props.children}
      {
        bucket.map(elem=>
          <Card id={elem.id} text={elem.text} />
        )
      }
    </div>
  )
}


export default CardBucket;