const https = require("https");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  const API_KEY = process.env.ANTHROPIC_API_KEY || "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";
  const body = event.body;

  return new Promise((resolve) => {
    const req = https.request({
      hostname: "api.anthropic.com",
      path: "/v1/messages",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Length": Buffer.byteLength(body),
      },
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: data,
        });
      });
    });
    req.on("error", (e) => {
      resolve({
        statusCode: 500,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        body: JSON.stringify({ error: { message: e.message } }),
      });
    });
    req.write(body);
    req.end();
  });
};
