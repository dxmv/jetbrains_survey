import useQuestions from './hooks/useQuestions'
import useQuestionPropertyCount from './hooks/useQuestionPropertyCount'
import TableAndDifficulty from './components/TableAndDifficulty'
import CategoriesChart from './components/charts/CategoriesChart'

function App() {
  const { questions, loading, error, errorMessage } = useQuestions();
  const difficulties = useQuestionPropertyCount(questions, 'difficulty');
  const categories = useQuestionPropertyCount(questions, 'category');


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
      </header>
      <TableAndDifficulty questions={questions} difficulties={difficulties} />
      <CategoriesChart data={categories} />
    </main>
  );
}

export default App
