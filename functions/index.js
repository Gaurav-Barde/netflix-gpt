/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import { setGlobalOptions } from "firebase-functions";
// import {onRequest} from "firebase-functions/https";
// import logger from "firebase-functions/logger";
// const { setGlobalOptions } = require("firebase-functions");
// const { onRequest } = require("firebase-functions/https");
// const logger = require("firebase-functions/logger");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import functions from "firebase-functions";
import fetch from "node-fetch";
import cors from "cors";

const corsHandler = cors({ origin: true });
const OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions";

export const movieRecommendations = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const query = req.body.query;

    if (!query) {
      return res.status(400).send("Missing userInput");
    }

    try {
      const response = await fetch(OPENAI_CHAT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a movie expert who provides short, fast movie recommendations. Always respond with a comma-separated list of 5 movies only.",
            },
            {
              role: "user",
              content: `Suggest 5 movies similar to: ${query}`,
            },
          ],
        }),
      });

      const data = await response.json();

      console.log("OpenAI Raw Response:", data);

      res.status(200).json({
        success: true,
        recommendations:
          data.choices?.[0]?.message?.content ?? "No recommendations returned",
      });
    } catch (err) {
      console.error("🔥 FIREBASE ERROR:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});
