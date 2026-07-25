const axios = require('axios');

const GHL_API_URL = process.env.GHL_API_URL || 'https://rest.gohighlevel.com/v1';
const GHL_API_KEY = process.env.GHL_API_KEY;

async function pushLeadToGHL(lead) {
  if (!GHL_API_KEY) {
    console.log('⚠️ GHL_API_KEY not set. Skipping push.');
    return null;
  }

  try {
    const response = await axios.post(
      `${GHL_API_URL}/contacts/`,
      {
        firstName: lead.name.split(' ')[0],
        lastName: lead.name.split(' ').slice(1).join(' ') || '',
        email: lead.email,
        phone: lead.phone || '',
        companyName: lead.company || '',
        source: lead.source || 'website',
        customField: {
          lead_id: lead._id
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`✅ Lead ${lead.name} pushed to GHL`);
    return response.data;
  } catch (error) {
    console.error('❌ Error pushing to GHL:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { pushLeadToGHL };