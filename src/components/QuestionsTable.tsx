import type { Question } from "../types";

const QuestionsTable = ({ questions }: { questions: Question[] }) => {
  return (
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question/Statement</th>
            <th>Category</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        {questions.map((question, index) => (
          <tr key={question.question}>
            <td>{index + 1}</td>
            <td>{question.question}</td>
            <td>{question.category}</td>
            <td className={`difficulty difficulty-${question.difficulty}`}>{question.difficulty}</td>
          </tr>
        ))}
      </table>
  )
}

export default QuestionsTable;