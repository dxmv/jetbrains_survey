import useQuestions from './hooks/useQuestions'
import './App.css'
import QuestionsTable from './components/QuestionsTable'

function App() {
  const {questions} = useQuestions();

  return (
    <main >
      <header className="header">
        <h4>Total questions: {questions.length}</h4>
      </header>
      {/* Charts here, side by side */}
      {/* Question table here */}
      <QuestionsTable questions={questions} />
    </main>
  )
}

export default App
