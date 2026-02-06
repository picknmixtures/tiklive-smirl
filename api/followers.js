import express from "express";
import fetch from "node-fetch";

const app = express();

const TIKLIVE_API_KEY = "d3a12f33f6404328126f8e844bb27c64"; // your TikLiveAPI key
const TIKTOK_USERNAME = "picknmixtures"; // your TikTok username

app.get("/followers", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.tikliveapi.com/userinfo-by-username/?username=${TIKTOK_USERNAME}`,
      { headers: { "X-Api-Key": TIKLIVE_API_KEY } }
    );

    const data = await response.json();
    res.json({ followers: data.user.followerCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch follower count" });
  }
});

export default app;
