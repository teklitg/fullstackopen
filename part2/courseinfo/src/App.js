const App = () => {
  const Header=()=>{
    return <h1>{course.name}</h1>
  }

  const Total=()=>{

    const total=course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <p> total of {total} exercises</p>
      </div>
    )
  }

  const Course=({course})=>{


    return (
      <div>
        <Header course={course}/>
        <ul>
          {
            course.parts.map(part=><li key={part.id}>
              {part.name} {part.exercises}
              </li>)  
          }
        </ul>
        <Total />
      </div>
    )
  }

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  return <Course course={course} />
}

export default App