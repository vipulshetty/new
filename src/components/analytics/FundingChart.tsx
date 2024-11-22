import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import type { DailyFunding } from '../../types';

interface FundingChartProps {
  data: DailyFunding[];
}

export default function FundingChart({ data }: FundingChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Progress</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => format(parseISO(date), 'MMM d')}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => format(parseISO(date as string), 'MMM d, yyyy')}
              formatter={(value) => [`$${value}`, 'Amount']}
            />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#4F46E5"
              fill="#4F46E5"
              fillOpacity={0.1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}