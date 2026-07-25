// Root route – API info
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Invoice Reminder Automator API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: [
      { method: 'GET', path: '/api/invoices', description: 'Get all invoices' },
      { method: 'GET', path: '/api/clients', description: 'Get all clients' },
      { method: 'GET', path: '/api/stats', description: 'Get dashboard stats' },
      { method: 'GET', path: '/api/reminders', description: 'Get all reminders' }
    ]
  });
});