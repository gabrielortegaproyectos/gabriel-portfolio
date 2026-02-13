import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useLanguage } from '@/context/language-context';

const data = [
  { epoch: 1, accuracy: 0.65, loss: 0.8 },
  { epoch: 2, accuracy: 0.72, loss: 0.65 },
  { epoch: 3, accuracy: 0.78, loss: 0.55 },
  { epoch: 4, accuracy: 0.82, loss: 0.45 },
  { epoch: 5, accuracy: 0.85, loss: 0.38 },
  { epoch: 6, accuracy: 0.87, loss: 0.32 },
  { epoch: 7, accuracy: 0.89, loss: 0.28 },
  { epoch: 8, accuracy: 0.91, loss: 0.25 },
];

export const InteractiveDemo = () => {
  const { t } = useLanguage();

  return (
    <div className="flex h-full min-h-[200px] w-full flex-col">
      <div className="mb-2">
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t('cards.modelMetrics')}</h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">{t('cards.modelMetricsSubtitle')}</p>
      </div>
      <div className="h-full w-full flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.4} />
            <XAxis dataKey="epoch" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fafafa' }}
              itemStyle={{ color: '#fafafa' }}
            />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
            <Line type="monotone" dataKey="loss" stroke="#8b5cf6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
