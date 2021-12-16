import React, {useContext} from 'react'
import { useDrag } from 'react-dnd'
import "./Card.css"

function Card({id,text}) {
//  const {curDragId,setCurDragId} = useContext(AuthContext);
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    item:{id, text},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })

  }))

  return (
   
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}} className="dragable" id={id}>
        
        <div role="Handle" ref={drag} className="full">
          <textarea className="full">{text}</textarea>
          
        </div>
    </div>
  )
}

export default Card;