async function testUpdate() {
  const url = 'https://qntmnfmdagckkfxqpwpo.supabase.co/rest/v1/requests?id=eq.c7c4193a-5fba-4593-9e23-1af9070406a4';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFudG1uZm1kYWdja2tmeHFwd3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NTAxMTMsImV4cCI6MjA5OTUyNjExM30.0w9p6Ttumdf6i45iNFsg2auPSLk0EXuZOzepgVgyqlM';
  
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
      'Authorization': `Bearer ${apiKey}`,
      'Prefer': 'return=representation'
    },
    body: JSON.stringify({
      assigned_to: 'd83cad89-710f-4391-a6ed-2f2b2a06f49c',
      status: 'assigned',
      form_code: 'FM-OICT-009',
      current_step_index: 0,
      workflow_log: []
    })
  });
  
  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Response:', data);
}

testUpdate();
