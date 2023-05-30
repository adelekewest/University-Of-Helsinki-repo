import {useState} from 'react'

const FirstHeader = ({text}) => <h1>{text}</h1>

const Button = ({text, state}) =>  <button onClick={state}>{text}</button>
  
const SecondHeader = ({text}) => <h1>{text}</h1>

const StaticLine = ({text, value, percentage}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {percentage}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => { 

  if (all === 0) {
    return (
      <div>
          No Feedback Given
      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <StaticLine text="Good" value = {good} />
          <StaticLine text="Neutral" value = {neutral} />
          <StaticLine text="Bad" value = {bad} />
          <StaticLine text="All" value = {all} />
          <StaticLine text="Average" value = {average} />
          <StaticLine text="Positive" value = {positive} percentage = '%'/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const firstHeader = 'Give Feedback'
  const secondHeader = 'Statistics'

  //Save clicks of each button to it's own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  const setToGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const setToNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const setToBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <FirstHeader text={firstHeader} />
      <Button text="Good" state={setToGood}/>
      <Button text="Neutral" state={setToNeutral} />
      <Button text="Bad" state={setToBad}/>
      <SecondHeader text={secondHeader} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App;
