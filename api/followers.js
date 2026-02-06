import fetch from "node-fetch";

const TIKLIVE_API_KEY = "d3a12f33f6404328126f8e844bb27c64"; // your TikLiveAPI key
const TIKTOK_USERNAME = "picknmixtures"; // your TikTok username

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.tikliveapi.com/userinfo-by-username/?username=${TIKTOK_USERNAME}`,
      { headers: { "X-Api-Key": TIKLIVE_API_KEY } }
    );
    const data = await response.json();
    res.status(200).json({ followers: data.user.followerCount });
  } catch (err) {
    console.error("TikLiveAPI fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch follower count" });
  }
}
