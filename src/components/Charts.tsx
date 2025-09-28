import type { Question } from '../types';
import useQuestionPropertyCount from '../hooks/useQuestionPropertyCount';
import CategoriesChart from './charts/CategoriesChart';
import DifficultiesChart from './charts/DifficultiesChart';

const Charts = ({ questions }: { questions: Question[] }) => {
  const categories = useQuestionPropertyCount(questions, 'category');
  const difficulties = useQuestionPropertyCount(questions, 'difficulty');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px', gap: '20px' }}>
      <DifficultiesChart data={difficulties} />
      <CategoriesChart data={categories} />
    </div>
  );
}

export default Charts;