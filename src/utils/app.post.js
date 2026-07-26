// =====================================================
// 📹 YOUTUBE SCRIPT - Invoice Automator Tech Walkthrough
// =====================================================

/*
=== SCENE 1: Hook (0:00 - 0:30) ===
Visual: App in action - sending a reminder email
Narration: "I was tired of chasing clients for payments. So I built this."

=== SCENE 2: Problem (0:30 - 1:30) ===
Visual: Frustrating inbox, overdue invoices
Narration: "As a freelancer, following up on late payments was a nightmare."

=== SCENE 3: My Tech Stack (1:30 - 3:00) ===
Visual: Diagram showing Node.js, Express, MongoDB, Mongoose, Vercel, React
Narration: "I built this app using..."

=== SCENE 4: Code Walkthrough - POST Routes (3:00 - 15:00) ===
*/

// The main POST route in your API
app.post('/api/leads', async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/*
=== SCENE 5: Live Demo (15:00 - 20:00) ===
Visual: Postman + Vercel live URL
Narration: "Here's the API in action..."

=== SCENE 6: Challenges (20:00 - 25:00) ===
Narration: "The hardest part was..."

=== SCENE 7: Final Thoughts (25:00 - 30:00) ===
Narration: "If I can build this, so can you. Subscribe for more."
*/