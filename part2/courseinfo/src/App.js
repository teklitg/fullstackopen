const App = () => {
 const Header=({course})=>{
    return <h1>{course}</h1>
  }

  const Total=({parts})=>{

    const total=parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <p> total of {total} exercises</p>
      </div>
    )
  }

  const Course=({courses})=>{

    
    return (
      <div>
        {
          courses.map(course=>
            <div key={course.id}>
           <Header course={course.name}></Header>
           <div>{course.parts.map(part=><div key={part.id}>{part.name}</div>)}</div>
           <Total parts={course.parts}/>
           </div>
          )
  }
      </div>
    )
  }

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return <Course courses={courses} />
}

export default App