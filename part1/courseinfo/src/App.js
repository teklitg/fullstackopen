
const Header= (props)=>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props)=>{
  return (
  <div>
    <p>{props.part1} {props.exercise1}</p>
  </div>
  )
}

const Content= (props)=>{
  const par = 'Fundamentals of React' ;
  const exe = 10 ;
  
  return (
    <div>
      <Part part1={par} exercise1={exe}/>
      <Part part1={par} exercise1={exe}/>
      <Part part1={par} exercise1={exe} />
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
 
  const exercises1 = 10

  const exercises2 = 7
  
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
