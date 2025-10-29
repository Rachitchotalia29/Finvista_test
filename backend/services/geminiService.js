import fetch from 'node-fetch';

const DEFAULT_MODEL = 'gemini-1.5-flash';

const buildPrompt = (prompt) =>
  `${prompt}\n\nRespond with concise bullet points tailored for an Indian investor.`;

export const getGeminiSuggestions = async (prompt, fallback = []) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    return fallback.length
      ? fallback
      : ['Set the GEMINI_API_KEY in your backend .env to receive AI-driven insights.'];
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: buildPrompt(prompt) }]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      throw new Error('Gemini API request failed');
    }

    const data = await response.json();

    const text = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .join('\n');

    if (!text) {
      return fallback.length ? fallback : ['No AI suggestions available at the moment.'];
    }

    return text
      .split('\n')
      .map((line) => line.replace(/^[-*\s]+/, '').trim())
      .filter(Boolean);
  } catch (error) {
    console.error('Failed to fetch Gemini suggestions:', error.message);
    return fallback.length ? fallback : ['Unable to fetch AI suggestions right now.'];
  }
};
