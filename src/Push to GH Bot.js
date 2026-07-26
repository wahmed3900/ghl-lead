// ============================================================
// GHL BOT - Push Lead to GoHighLevel
// ============================================================
const axios = require('axios');

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_ACCOUNT_ID = process.env.GHL_ACCOUNT_ID;

async function pushLeadToGHL(lead) {
  try {
    const response = await axios.post(
      'https://rest.gohighlevel.com/v1/contacts/',
      {
        firstName: lead.name.split(' ')[0],
        lastName: lead.name.split(' ').slice(1).join(' '),
        email: lead.email,
        phone: lead.phone,
        companyName: lead.company,
        customField: {
          source: lead.source || 'Website',
          lead_id: lead._id
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`✅ Lead ${lead.name} pushed to GHL`);
    return response.data;
  } catch (error) {
    console.error('❌ GHL Push Failed:', error.response?.data || error.message);
    throw error;
  }
}