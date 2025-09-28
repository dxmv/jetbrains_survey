import useQuestions from './hooks/useQuestions'
import useQuestionPropertyCount from './hooks/useQuestionPropertyCount'
import TableAndDifficulty from './components/TableAndDifficulty'
import CategoriesChart from './components/charts/CategoriesChart'
import { useMemo, useState } from 'react';

function App() {
  const { questions, loading, error, errorMessage } = useQuestions();
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredQuestions = useMemo(() => {
    if (!categoryFilter) return questions;
    return questions.filter(q => q.category === categoryFilter);
  }, [questions, categoryFilter]);

  const difficulties = useQuestionPropertyCount(filteredQuestions, 'difficulty');
  const categories = useQuestionPropertyCount(questions, 'category');

  const handleCategoryFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setCategoryFilter(category);
  };


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
        <select id="category-filter" onChange={handleCategoryFilterChange}>
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
      </header>
      <TableAndDifficulty questions={filteredQuestions} difficulties={difficulties} />
      <CategoriesChart data={categories} />
    </main>
  );
}

export default App
