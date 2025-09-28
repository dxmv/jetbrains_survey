import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import type { PropertyCount } from '../../types';

interface CategoriesChartProps {
  data: PropertyCount[];
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6384', '#36a2eb'];
const ROW_HEIGHT = 50;

const CategoriesChart = ({ data }: CategoriesChartProps) => {

  const dynamicHeight = Math.max(300, data.length * ROW_HEIGHT);
  return (
    <div className="categories-chart">
      <h3>Distribution by Categories ({data.length} {data.length === 1 ? 'category' : 'categories'})</h3>
      <ResponsiveContainer width="100%" height={dynamicHeight}>
        <BarChart 
          data={data}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="category" dataKey="name" width={200} interval={0} />
          <XAxis type="number" />
          <Tooltip />
          <Bar dataKey="count">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <LabelList dataKey="count" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoriesChart;
