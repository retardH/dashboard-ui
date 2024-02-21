import { BarChart, Bar, Rectangle, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mo',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tu',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'We',
    uv: 2000,
    pv: 5000,
    amt: 2290,
  },
  {
    name: 'Th',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fr',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sa',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Su',
    uv: 1820,
    pv: 3000,
    amt: 2500,
  },
];

function EarningBarChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} className="h-full w-full">
        <XAxis dataKey="name" />
        <Bar
          dataKey="pv"
          fill="#7c3aed"
          barSize={20}
          activeBar={<Rectangle fill="pink" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default EarningBarChart;
