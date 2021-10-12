import React from "react"
import MyButton from './components/MyButton/MyButton'
import Clock from './components/Clock/Clock'
import Counter from './components/Counter/Counter'

const buttonArray = ['success', 'primary', 'secondary', 'danger', 'warning']

const App = () => {
  return (
    <div className="App">
      {buttonArray.map((btn)=>
          <MyButton key={btn} className={btn}>{btn}</MyButton>
      )}
      
      <Clock />
      <Counter />
    </div>
  );
}

export default App;
