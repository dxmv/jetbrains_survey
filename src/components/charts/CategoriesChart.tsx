import { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';
import type { PropertyCount } from '../../types';

interface CategoriesChartProps {
  data: PropertyCount[];
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6384', '#36a2eb'];
const DESKTOP_ROW_HEIGHT = 50;
const MOBILE_ROW_HEIGHT = 60;
const MOBILE_BREAKPOINT = 900;

const CategoriesChart = ({ data }: CategoriesChartProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dynamicHeight = useMemo(() => {
    const rowHeight = isMobile ? MOBILE_ROW_HEIGHT : DESKTOP_ROW_HEIGHT;
    const minimumHeight = isMobile ? 240 : 300;
    return Math.max(minimumHeight, data.length * rowHeight);
  }, [data.length, isMobile]);

  const yAxisWidth = isMobile ? 120 : 200;
  const chartMargin = useMemo(() => ({
    top: 16,
    right: 24,
    left: isMobile ? 8 : 16,
    bottom: 16,
  }), [isMobile]);

  return (
    <div className="categories-chart">
      <h3>Distribution by Categories ({data.length} {data.length === 1 ? 'category' : 'categories'})</h3>
      <ResponsiveContainer width="100%" height={dynamicHeight}>
        <BarChart 
          data={data}
          layout="vertical"
          margin={chartMargin}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="category" dataKey="name" width={yAxisWidth} interval={0} />
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
