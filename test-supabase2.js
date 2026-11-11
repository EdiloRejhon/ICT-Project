async function testSignUp() {
  const url = 'https://qntmnfmdagckkfxqpwpo.supabase.co/auth/v1/signup';
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFudG1uZm1kYWdja2tmeHFwd3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NTAxMTMsImV4cCI6MjA5OTUyNjExM30.0w9p6Ttumdf6i45iNFsg2auPSLk0EXuZOzepgVgyqlM';
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey,
    },
    body: JSON.stringify({
      email: 'teststaff@nemsu.edu.ph',
      password: 'password123',
      data: {
        full_name: 'Test Staff',
        role: 'staff',
        position: 'ICT Staff',
        department_id: null
      }
    })
  });
  
  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Response:', data);
}

testSignUp();
