import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadList = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get('/api/leads');
      setLeads(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading leads...</div>;

  return (
    <div className="lead-list">
      <h2>📋 Leads ({leads.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.company || '-'}</td>
              <td><span className={`status-${lead.status?.toLowerCase()}`}>{lead.status || 'NEW'}</span></td>
              <td>
                <button onClick={() => console.log('View', lead._id)}>👁️</button>
                <button onClick={() => console.log('Edit', lead._id)}>✏️</button>
                <button onClick={() => console.log('Delete', lead._id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadList;