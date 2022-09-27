import { gql, useQuery } from "@apollo/client"
import "./styles/main.css"

interface Lesson {
  id: string
  title: string
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`

export function App() {
  const {data} = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)


  return (
    <div className="">
      <h1>Ola mundo</h1>
      <ul>
        {data?.lessons.map(lesson => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>

    </div>
  )
}

