import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadList = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get('/api/leads');
      setLeads(res.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id) => {
    if (!confirm('Delete this lead?')) return;
    try {
      await axios.delete(`/api/leads/${id}`);
      setLeads(leads.filter(lead => lead._id !== id));
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  const filteredLeads = filter === 'all' ? leads : leads.filter(lead => lead.status === filter);

  if (loading) return <div className="loading">Loading leads...</div>;

  return (
    <div className="lead-list-container">
      <div className="lead-list-header">
        <h2>📋 Leads ({leads.length})</h2>
        <div className="filters">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('NEW')}>New</button>
          <button onClick={() => setFilter('CONTACTED')}>Contacted</button>
          <button onClick={() => setFilter('QUALIFIED')}>Qualified</button>
        </div>
      </div>

      {filteredLeads.length === 0 ? (
        <div className="empty-state">📭 No leads found</div>
      ) : (
        <table className="lead-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Source</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead._id}>
                <td><strong>{lead.name}</strong></td>
                <td>{lead.email}</td>
                <td>{lead.company || '-'}</td>
                <td>{lead.source || '-'}</td>
                <td><span className={`badge status-${lead.status?.toLowerCase()}`}>{lead.status || 'NEW'}</span></td>
                <td>
                  <button className="view-btn" onClick={() => console.log('View', lead._id)}>👁️</button>
                  <button className="edit-btn" onClick={() => console.log('Edit', lead._id)}>✏️</button>
                  <button className="delete-btn" onClick={() => deleteLead(lead._id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeadList;