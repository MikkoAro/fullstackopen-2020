import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const All = (props) => {
  return `All: ${props.values.reduce((previous, current) => previous + current,0)}`
}

const Average = (props) => {
  let total = props.values.reduce((previous, current) => previous + current,0)
  let sum = props.values[0] - props.values[2]
  return `Average: ${sum / total}`
}

const Positive = (props) => {
  let total = props.values.reduce((previous, current) => previous + current,0)
  let percentage = props.values[0] / total * 100
  return `Positive: ${percentage}%`
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text ? `${props.text} ${props.value}` : props.value}</td>
    </tr>
   )
}

const Statistics = (props) => {
  if (props.values.every(item => item === 0)) {
    return (
      <thead>
        <tr>
          <td>No feedback given</td>
        </tr>
      </thead>
    )
  }
  return (
    <thead>
        <StatisticLine text="Good" value={props.values[0]} />
        <StatisticLine text="Neutral" value={props.values[1]}  />
        <StatisticLine text="Bad" value={props.values[2]}  />
        <StatisticLine value={<All values={props.values}/>}  />
        <StatisticLine value={<Average values={props.values}/>}  />
        <StatisticLine value={<Positive values={props.values}/>}  />
    </thead>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <table>
        <Statistics values={[good, neutral, bad]}/>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)