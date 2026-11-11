async function checkSchema() {
  const url = 'https://qntmnfmdagckkfxqpwpo.supabase.co/rest/v1/requests?select=*&limit=1';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFudG1uZm1kYWdja2tmeHFwd3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NTAxMTMsImV4cCI6MjA5OTUyNjExM30.0w9p6Ttumdf6i45iNFsg2auPSLk0EXuZOzepgVgyqlM';
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'apikey': apiKey,
    }
  });
  
  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Response:', data);
}

checkSchema();
