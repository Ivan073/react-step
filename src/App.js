import React from "react"
import MyButton from './components/MyButton/MyButton'
import MyInput from './HW1/MyInput'
import Interface from './HW1/Interface'

const buttonArray = ['success', 'primary', 'secondary', 'danger', 'warning']

const App = () => {
  return (
    <div className="App">
      {buttonArray.map((btn)=>
          <MyButton className={btn}>{btn}</MyButton>
      )}
      <MyInput className = {"full-width"}/>
      <Interface />
    </div>
  );
}

export default App;
