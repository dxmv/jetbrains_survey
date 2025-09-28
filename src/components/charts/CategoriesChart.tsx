import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { PropertyCount } from '../../types';

interface CategoriesChartProps {
  data: PropertyCount[];
}

const CategoriesChart = ({ data }: CategoriesChartProps) => {
  return (
    <div>
      <h3>Distribution by Categories</h3>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart 
          data={data}
          layout="horizontal"
          width={"100vw"}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="category" dataKey="name" width={150} />
          <YAxis type="number" />

          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoriesChart;
