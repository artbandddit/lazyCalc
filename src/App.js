import { useState } from 'react'
import './App.css'
import CalcResult from './comp'

function App() {
  const digit = (e) => {
    if (operation === '' || calcResult !== '') {
      if (calcResult !== '') {
        op1 = 0
        setOp2('')
        setOperation('')
        setCalcResult('')
      }
      setOp1(+op1 === 0 ? e.target.value : op1 + e.target.value)
    } else {
      setOp2(op2 + e.target.value)
    }
  }
  const action = (e) => {
    switch (e.target.value) {
      case 'c':
        setOp1(0)
        setOp2('')
        setOperation('')
        setCalcResult('')
        break
      case '+':
        setOperation('+')
        break
      case '-':
        setOperation('-')
        break
      case '/':
        setOperation('/')
        break
      case '*':
        setOperation('*')
        break
      case '=':
        setCalcResult(calc(op1, op2, operation))
        break
    }
  }

  const calc = (p1, p2, a) => {
    switch (a) {
      case '+':
        return +p1 + +p2
      case '-':
        return +p1 - +p2
      case '*':
        return +p1 * +p2
      case '/':
        return +p1 / +p2
    }
  }
  let [op1, setOp1] = useState(0)
  let [op2, setOp2] = useState('')
  let [operation, setOperation] = useState('')
  const [calcResult, setCalcResult] = useState('')
  return (
    <div className="App">
      <div id="result">{op1} {operation} {op2}<CalcResult calcResult={calcResult} /></div>
      <form>
        <div>
          <button type="button" value="1" onClick={digit}>1</button>
          <button type="button" value="2" onClick={digit}>2</button>
          <button type="button" value="3" onClick={digit}>3</button>
          <button type="button" value="4" onClick={digit}>4</button>
          <button type="button" value="5" onClick={digit}>5</button>
          <button type="button" value="6" onClick={digit}>6</button>
          <button type="button" value="7" onClick={digit}>7</button>
          <button type="button" value="8" onClick={digit}>8</button>
          <button type="button" value="9" onClick={digit}>9</button>
          <button type="button" value="0" onClick={digit}>0</button>
        </div>
        <div>
          <button type="button" value="c" onClick={action}>C</button>
          <button type="button" value="+" onClick={action}>+</button>
          <button type="button" value="-" onClick={action}>-</button>
          <button type="button" value="*" onClick={action}>*</button>
          <button type="button" value="/" onClick={action}>/</button>
          <button type="button" value="=" onClick={action}>=</button>
        </div>
      </form>
    </div>
  )
}

export default App
