import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';
import type{ PropertyCount } from '../../types';

interface DifficultiesChartProps {
  data: PropertyCount[];
}

const COLORS = ['var(--easy-color)', 'var(--medium-color)', 'var(--hard-color)'];
const EASY_NAME = 'easy';
const MEDIUM_NAME = 'medium';
const HARD_NAME = 'hard';

const DifficultiesChart = ({ data }: DifficultiesChartProps) => {
  const pieData: Array<Record<string, string | number>> = data.map(({ name, count }) => ({ name, count }));
  return (
    <div>
      <h3>Difficulty Distribution</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            dataKey="count"
            nameKey="name"
            label={({ name, value }: any) => `${name}: ${value}`}
          >
            {data.map((entry, index) => (
              <Cell 
              key={`cell-${index}`} 
              fill={
                entry.name === EASY_NAME ? 'var(--easy-color)'
                 : entry.name === MEDIUM_NAME ? 'var(--medium-color)' 
                 : entry.name === HARD_NAME ? 'var(--hard-color)'
                 : COLORS[index % COLORS.length]
              } 
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
          <Pie dataKey="count" fill="#8884d8">
            <LabelList dataKey="count" position="top" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DifficultiesChart;
