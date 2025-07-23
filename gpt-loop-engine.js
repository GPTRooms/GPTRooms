// Simulated GPT-to-GPT recursive loop engine
async function gptLoop(history) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: process.env.MODEL || 'gpt-4',
      messages: history
    })
  });
  const data = await response.json();
  return data.choices?.[0]?.message;
}

module.exports = gptLoop;
