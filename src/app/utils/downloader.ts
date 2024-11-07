"use server";

import {
  FACEBOOK_API,
  INSTAGRAM_API,
  SPOTIFY_API,
  TIKTOK_API,
  TWITTER_API,
  YOUTUBE_API,
} from "../config/api";
import { PLATFORM_LIST } from "../types";

const platform_api = {
  youtube: YOUTUBE_API,
  spotify: SPOTIFY_API,
  facebook: FACEBOOK_API,
  tiktok: TIKTOK_API,
  twitter: TWITTER_API,
  instagram: INSTAGRAM_API,
};

async function getAPIResponse({
  url,
  platform,
}: {
  url: string;
  platform: PLATFORM_LIST;
}) {
  try {
    const response = await fetch(`${platform_api[platform]}${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export { getAPIResponse };
