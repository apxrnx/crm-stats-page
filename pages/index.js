import React, { useState, useEffect } from 'react';
import PieChart from './components/PieChart';
import StatCard from './components/StatCard';
import BarChart from './components/BarChart';
import TimeSelector from './components/TimeSelector';

const CRMStats = () => {
  const [timeRange, setTimeRange] = useState('1 day');
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setStats(data); // Set your stats data here
    };
    fetchData();
  }, [timeRange]);

  return (
    <div className="container mx-auto p-8">
      {/* Time Selector */}
      <TimeSelector setTimeRange={setTimeRange} />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <StatCard title="Revenue" value="$50,000" />
        <StatCard title="Active Users" value="1200" />
        <StatCard title="New Signups" value="300" />
      </div>

      {/* Charts */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Sales Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <PieChart data={stats.pieData} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <BarChart data={stats.barData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMStats;
