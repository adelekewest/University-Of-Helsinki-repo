const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({course}) => {
    const sum = course.parts.reduce((s, y) => s + y.exercises, 0)
    return (
        <b>total of {sum} exercises</b>
    )
}

const Content = ({course}) => {
    return (
        <>
            <h2>{course.name}</h2>
            {course.parts.map(course => <Part key={course.id} part={course}/>)}
            <Total course={course}/>
        </>
    )
}

const Header = ({name}) => <h1>{name}</h1>

const Course = ({course}) => {
    const name = 'Web development curriculum'
    return (
        <div>
            <Header name = {name}/>
            {course.map(course => <Content key={course.id} course={course}/>)}
        </div>
    )
}

export default Course