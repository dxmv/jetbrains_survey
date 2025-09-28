import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type{ PropertyCount } from '../../types';

interface DifficultiesChartProps {
  data: PropertyCount[];
}

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const DifficultiesChart = ({ data }: DifficultiesChartProps) => {
  return (
    <div>
      <h3>Difficulties</h3>
      <ResponsiveContainer width={400} height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
