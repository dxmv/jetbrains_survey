import useQuestions from './hooks/useQuestions'
import './App.css'
import QuestionsTable from './components/QuestionsTable'
import useCategories from './hooks/useCategories'

function App() {
  const { questions, loading, error, errorMessage } = useQuestions();
  const categories = useCategories(questions);

  if (error) {
    return <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Error: {errorMessage}</main>;
  }

  if (loading) {
    return <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</main>;
  }

  return (
    <main>
      <header className="header">
        <h2>Total questions: {questions.length}</h2>
        <h2>Total categories: {categories.length}</h2>
      </header>
      {/* Charts here, side by side */}
      {/* Question table here */}
      <QuestionsTable questions={questions} />
    </main>
  );
}

export default App
