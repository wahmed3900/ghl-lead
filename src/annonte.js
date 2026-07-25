// =====================================================
// 🎬 SCENE 4: The POST Route That Makes It All Work
// =====================================================

app.post('/api/leads', async (req, res) => {
  // 💡 SCENE 4.1: Extract lead data from the request body
  const { name, email, phone, company } = req.body;

  // 💡 SCENE 4.2: Create a new lead in MongoDB using Mongoose
  const lead = new Lead({ name, email, phone, company });
  await lead.save();

  // 💡 SCENE 4.3: Return the saved lead to the client
  res.status(201).json(lead);
});

// =====================================================
// 🎬 SCENE 4.4: More POST Routes — Pushing to GHL
// =====================================================

app.post('/api/leads/sync', async (req, res) => {
  // Push to GoHighLevel API
  const ghlResponse = await axios.post(`${GHL_API_URL}/contacts/`, req.body, {
    headers: { Authorization: `Bearer ${GHL_API_KEY}` }
  });
  res.json(ghlResponse.data);
});