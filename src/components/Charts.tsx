import { PieChart, Pie, Cell, Tooltip, Legend, } from 'recharts';
import type { Question } from '../types';
import useQuestionPropertyCount from '../hooks/useQuestionPropertyCount';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

const Charts = ({ questions }: { questions: Question[] }) => {
const categories = useQuestionPropertyCount(questions, 'category');
const difficulties = useQuestionPropertyCount(questions, 'difficulty');
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <div>
        <h3>Categories</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={categories}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
            nameKey="name"
          >
            {categories.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div>
        <h3>Difficulties</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={difficulties}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
            nameKey="name"
          >
            {difficulties.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Charts;