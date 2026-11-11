async function checkInsert() {
  const url = 'https://qntmnfmdagckkfxqpwpo.supabase.co/rest/v1/requests';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFudG1uZm1kYWdja2tmeHFwd3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NTAxMTMsImV4cCI6MjA5OTUyNjExM30.0w9p6Ttumdf6i45iNFsg2auPSLk0EXuZOzepgVgyqlM';
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': `Bearer ${apiKey}`,
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      reference_number: 'REQ-2026-999999',
      status: 'pending'
    })
  });
  
  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Response:', data);
}

checkInsert();
