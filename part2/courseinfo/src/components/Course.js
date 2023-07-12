import Header from "./Header"
import Total from "./Total"


function Course({ courses }) {


    return (
        <div>
            {courses.map(course => <div key={course.id}>
                <Header course={course.name}></Header>
                <div>{course.parts.map(part => <div key={part.id}>{part.name}</div>)}</div>
                <Total parts={course.parts} />
            </div>
            )}
        </div>
    )
}

  export default Course