import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { PropertyCount } from '../../types';

interface CategoriesChartProps {
  data: PropertyCount[];
}

const CategoriesChart = ({ data }: CategoriesChartProps) => {
  return (
    <div style={{ width: '80vw', height: '700px' }}>
      <h3>Categories</h3>
      <ResponsiveContainer>
        <BarChart 
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoriesChart;
