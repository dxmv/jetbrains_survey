import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type{ PropertyCount } from '../../types';

interface DifficultiesChartProps {
  data: PropertyCount[];
}

const COLORS = ['var(--easy-color)', 'var(--medium-color)', 'var(--hard-color)'];
const EASY_NAME = 'easy';
const MEDIUM_NAME = 'medium';
const HARD_NAME = 'hard';

const DifficultiesChart = ({ data }: DifficultiesChartProps) => {
  return (
    <div>
      <h3>Difficulty Distribution</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            colors={COLORS}
            labelLine={false}
            dataKey="count"
            nameKey="name"
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DifficultiesChart;
