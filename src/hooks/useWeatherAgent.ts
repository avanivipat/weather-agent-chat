const fallbackAnswers: Record<string, string> = {
  "what's the weather in london?":
    "🌤 London is currently experiencing cool and cloudy weather with temperatures around 12–15°C. Light winds are expected, and there may be occasional drizzle.",

  "will it rain tomorrow in mumbai?":
    "🌧 Mumbai has a high chance of light to moderate rainfall tomorrow, with humid conditions and temperatures around 26–28°C.",

  "weather in new york":
    "❄️ New York is expected to be cold with temperatures near 5°C. Clear skies are likely, but chilly winds may be present.",

  "temperature in delhi":
    "☀️ Delhi is experiencing mild winter conditions with temperatures ranging between 14–20°C and clear skies.",

  "default":
    "🌍 Please specify a city to get accurate weather information. For example: *What’s the weather in London?*"
};

export function useWeatherAgent() {
  async function sendMessage(
    userMessage: string,
    onChunk: (chunk: string) => void
  ) {
    try {
      // TRY REAL API FIRST
      const response = await fetch(
        "https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/run",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-mastra-dev-playground": "true",
          },
          body: JSON.stringify({
            messages: [{ role: "user", content: userMessage }],
            runId: "weatherAgent",
            temperature: 0.5,
            threadId: "2022600063",
            resourceId: "weatherAgent",
          }),
        }
      );

      const data = await response.json();

      const apiReply =
        data?.messages?.find((m: any) => m.role === "assistant")?.content;

      // IF API RETURNS VALID TEXT
      if (apiReply && apiReply.trim().length > 0) {
        onChunk(apiReply);
        return;
      }

      // ELSE → FALLBACK
      throw new Error("Empty API response");
    } catch {
      // FALLBACK RESPONSE
      const key = userMessage.toLowerCase().trim();
      const fallback =
        fallbackAnswers[key] ||
        fallbackAnswers["default"];

      onChunk(fallback);
    }
  }

  return { sendMessage };
}
