import { useState } from 'react'

const FirstHeader = ({text}) => <h1>{text}</h1>

const Display = ({text}) => <p>{text}</p>

const Button = ({text, click}) => <button onClick={click}>{text}</button>

 const SecondHeader = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(anecdotes[0])
  const [points, setPoint] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const generateRandom = () => {
    const randomQuote = anecdotes[Math.floor(Math.random() * anecdotes.length)]
    setSelected(randomQuote)
  }

  //Create new votes with the vote count of the current selection increased by one
  const generateVote = () => {
    const index = anecdotes.indexOf(selected)
    const copy = [...points]
    copy[index] += 1
    setPoint(copy)
  }


  const returnVotes = (anecdote) => {
    return (
      points[anecdotes.indexOf(anecdote)]
    )
  }


  const voteStatement = (anecdote) => {
    return(("Has ").concat(returnVotes(anecdote).toString().concat(" votes")))
  }

  const mostPopular = () => {
    //keeps track of the highest vote value
    let mostPopular = points[0];
    //indexes of anecdotes and votes correspond in their individual arrays
    let index = 0;
    for (let i = 0; i < points.length ; i++){
      if (points[i] > mostPopular){
        mostPopular = points[i]
        index = i
      }
    }
    return anecdotes[index]
  }

  return (
    <div>
      <FirstHeader text="Anecdote of the day" />
      <Display text={selected} />
      <Button text="next anecdote" click={generateRandom}/>
      <Button text="vote" click={generateVote}/>
      <Display text = {voteStatement(selected)}/>
      <SecondHeader text="Anecdote with most votes"/>
      <Display text={mostPopular()} />
      <Display text={voteStatement(mostPopular())} />
    </div>
  )
  }


export default App
