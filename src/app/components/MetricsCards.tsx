import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, value, change, trend, description 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <span className={`text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {change}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-4">{description}</p>
    </div>
  );
};

const MetricsCards: React.FC = () => {
  const metrics = [
    {
      title: 'Total Records',
      value: '1,250',
      change: '-12.5%',
      trend: 'down' as const,
      description: 'Trending down this month - Needs attention'
    },
    {
      title: 'New Entries',
      value: '1,234',
      change: '-20%',
      trend: 'down' as const,
      description: 'Down 20% this period - Acquisition needs attention'
    },
    {
      title: 'Active Accounts',
      value: '45,678',
      change: '-12.5%',
      trend: 'down' as const,
      description: 'Strong user retention - Engagement exceeds targets'
    },
    {
      title: 'Success Rate',
      value: '4.5%',
      change: '-4.5%',
      trend: 'down' as const,
      description: 'Steady performance increase - Meets growth projections'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsCards;