import React from "react";

const MyModal = ({visible, setVisible, children}) => {
  return (<>
    
     <div className={visible?'modal open':'modal'}>      
        <div className="modal-content">
            <div className="modal-body">
            <i className="material-icons clickable" onClick={()=>setVisible(false)}>close</i>
                {children}
            </div>            
            <div className="modal-footer">
            </div>
        </div>
     </div>
     <div className={visible?"modal overlay open-overlay":"modal-overlay"}></div>
     </>
  );
};

export default MyModal;
