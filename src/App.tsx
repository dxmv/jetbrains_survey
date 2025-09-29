import useQuestions from './hooks/useQuestions'
import useQuestionPropertyCount from './hooks/useQuestionPropertyCount'
import TableAndDifficulty from './components/TableAndDifficulty'
import CategoriesChart from './components/charts/CategoriesChart'
import StatusMessage from './components/StatusMessage'
import { useMemo, useState } from 'react';

function App() {
  const { questions, loading, error, errorMessage, refetch } = useQuestions();
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

  return (
    <StatusMessage loading={loading} error={error} errorMessage={errorMessage} onRetry={refetch}>
      <main>
        <header className="header">
          <h2>Total questions: {questions.length}</h2>
          <select id="category-filter" onChange={handleCategoryFilterChange} style={{ maxWidth: '100%' }}>
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
        </header>
        <TableAndDifficulty questions={filteredQuestions} difficulties={difficulties} />
        <CategoriesChart data={categories} />
      </main>
    </StatusMessage>
  );
}

export default App
