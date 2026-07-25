import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    qualified: 0,
    converted: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get('/api/leads');
      const leads = res.data;
      setStats({
        total: leads.length,
        new: leads.filter(l => l.status === 'NEW').length,
        contacted: leads.filter(l => l.status === 'CONTACTED').length,
        qualified: leads.filter(l => l.status === 'QUALIFIED').length,
        converted: leads.filter(l => l.status === 'CONVERTED').length,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading dashboard...</div>;

  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card total">
          <h3>Total Leads</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card new">
          <h3>🟢 New</h3>
          <p>{stats.new}</p>
        </div>
        <div className="stat-card contacted">
          <h3>🟡 Contacted</h3>
          <p>{stats.contacted}</p>
        </div>
        <div className="stat-card qualified">
          <h3>🔵 Qualified</h3>
          <p>{stats.qualified}</p>
        </div>
        <div className="stat-card converted">
          <h3>🏆 Converted</h3>
          <p>{stats.converted}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;