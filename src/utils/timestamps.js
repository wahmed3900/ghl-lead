// =====================================================
// 📹 INVOICE AUTOMATOR TECH WALKTHROUGH
// =====================================================

/*
🕐 TIMESTAMP | SCENE | VISUAL
-------------------------------------------------------------
00:00 - 00:30 | Hook | App in action
00:30 - 01:30 | Problem | Overdue invoice nightmare
01:30 - 03:00 | Tech Stack | Diagram: Node + Express + MongoDB
03:00 - 07:00 | POST Route 1 | /api/leads
07:00 - 10:00 | POST Route 2 | /api/leads/sync (GHL)
10:00 - 13:00 | POST Route 3 | /api/reminders/send
13:00 - 16:00 | Database | Saving to MongoDB
16:00 - 19:00 | Demo | Postman + Vercel live
19:00 - 22:00 | Challenges | What was hard
22:00 - 25:00 | Learnings | What I'd do differently
25:00 - 27:00 | CTA | Subscribe!
*/

// =====================================================
// SCENE 4: CODE WALKTHROUGH
// =====================================================

// 1️⃣ POST /api/leads — Add a new lead
app.post('/api/leads', async (req, res) => { ... });

// 2️⃣ POST /api/leads/sync — Push to GoHighLevel
app.post('/api/leads/sync', async (req, res) => { ... });

// 3️⃣ POST /api/reminders/send — Send overdue reminders
app.post('/api/reminders/send', async (req, res) => { ... });