import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const BarChartContent = ({data, dataKey}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
      >
        <Bar barSize={20} dataKey="count" fill="#1976D2" />
        <XAxis dataKey={dataKey} />
        <YAxis dataKey="count" />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend verticalAlign="top" />
      </BarChart>
    </ResponsiveContainer>
  );
};
