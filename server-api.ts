require('dotenv').config()

import express from 'express';
import axios from 'axios';

const YOUTUBE_PLAYLIST_ID = 'PLXEUJjGpEX7zuX1CKGVfspeG0dhsXhTrL';
const YOUTUBE_API_KEY = process.env['YOUTUBE_API_KEY'];

interface PlaylistItem {
  kind: string;
  etag: string;
  id: string;
  contentDetails: ContentDetails;
}

interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}

const api = express.Router();

api.get('/list-latest-videos', async (req, res) => {
  try {
    const playlistItemsResponse = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          playlistId: YOUTUBE_PLAYLIST_ID,
          key: YOUTUBE_API_KEY,
          part: "contentDetails",
        },
      }
    );
  
    const videoUrls = playlistItemsResponse.data.items
      .filter((item: PlaylistItem) =>
        Boolean(item.contentDetails.videoPublishedAt)
      )
      .map((item: PlaylistItem) => item.contentDetails.videoId)
      .map((videoId: string) => `https://www.youtube.com/embed/${videoId}`);
  
    res.json(videoUrls);
  } catch (error) {
    res.json([]);
  }
});

export { api };
