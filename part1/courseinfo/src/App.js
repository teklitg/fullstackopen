
const Header= (props)=>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}



const Content= (props)=>{
  
  
  return (
    <div>
      <p>{props.name1} {props.exercises1}</p>
      <p>{props.name2} {props.exercises2}</p>
      <p>{props.name3} {props.exercises3}</p>
    </div>
  )
}

const Total=(props)=>{
  return (
    <div>
      <p>Number of exercise { props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content name1={parts[0].name} name2={parts[1].name} name3={parts[2].name} exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App
