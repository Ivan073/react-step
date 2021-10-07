import React from "react"
import MyButton from './components/MyButton/MyButton'

const buttonArray = ['success', 'primary', 'secondary', 'danger', 'warning']

const App = () => {
  return (
    <div className="App">
      {buttonArray.map((btn)=>
          <MyButton className={btn}>{btn}</MyButton>
      )}
    </div>
  );
}

export default App;
