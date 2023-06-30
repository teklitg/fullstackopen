import { useState } from 'react'

const Button = ({click, text})=>{

  return (
    <div>
      <button onClick={click}>{text}</button>
    </div>
  )
}

const StatisticLine=({texts, value})=>{

   
  return (
    <div>
      <p>{texts} {value} </p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goods=()=>setGood(good+1)
  const neutrals=()=>setNeutral(neutral+1)
  const bads=()=>setBad(bad+1)

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button click={goods} text={"good"}></Button>
      <Button click={neutrals} text={"neutral"}></Button>
      <Button click={bads} text={"bad"}></Button>
      <h1>statistics</h1>
      <StatisticLine texts={"good"} value={good}></StatisticLine>
      <StatisticLine texts={"neutral"} value={neutral}></StatisticLine>
      <StatisticLine texts={"bad"} value={bad}></StatisticLine>
      <StatisticLine texts={"all"} value={good+neutral+bad}></StatisticLine>
      <StatisticLine texts={"average"} value={(bad+good+neutral)/3}></StatisticLine>
      <StatisticLine texts={"positive"} value={(good*100/(bad+good+neutral))+"%"}></StatisticLine>
    </div>
  )
}

export default App
