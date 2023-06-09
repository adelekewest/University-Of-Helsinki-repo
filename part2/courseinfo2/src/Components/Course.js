const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({course}) => {
    const sum = course.parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <b>total of {sum} exercises</b>
    )
}

const Content = ({course}) => {
    return(
        <>
            <h2>{course.name}</h2>
            {course.parts.map(parts => <Part key={parts.id} part={parts} />)}
            <Total key={course.id} course={course}/>
        </>
       
    )
}

const Header = ({course}) => <h1>{course}</h1>

const Course = ({course}) => {
    const courseName = 'Web development curriculum'
    return (
      <div>
      <Header course={courseName} />
      {course.map(course => <Content key={course.id} course={course}/>) }
      </div>
    )

}


export default Course