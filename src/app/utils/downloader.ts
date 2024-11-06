"use server";

import { YOUTUBE_API } from "../config/api";

async function getYoutubeLink({ url }: { url: string }) {
  const response = await fetch(`${YOUTUBE_API}${url}`);
  const data = await response.json();
  console.log(data);
}

export { getYoutubeLink };
