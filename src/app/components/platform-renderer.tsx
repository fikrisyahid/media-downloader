import { PLATFORM_LIST } from "../types";
import PrettyJSON from "./pretty-json";

export default function PlatformRenderer({
  platform,
  APIResponse,
}: {
  platform: PLATFORM_LIST;
  APIResponse: Record<string, unknown>;
}) {
  <PrettyJSON content={APIResponse} />;
  if (platform === "youtube") {
    return (
      <div>
        youtube-render
        <PrettyJSON content={APIResponse} />
      </div>
    );
  }
  if (platform === "spotify") {
    return (
      <div>
        spotify-render
        <PrettyJSON content={APIResponse} />
      </div>
    );
  }
  if (platform === "facebook") {
    return (
      <div>
        facebook-render
        <PrettyJSON content={APIResponse} />
      </div>
    );
  }
  if (platform === "tiktok") {
    return (
      <div>
        tiktok-render
        <PrettyJSON content={APIResponse} />
      </div>
    );
  }
  if (platform === "twitter") {
    return (
      <div>
        twitter-render
        <PrettyJSON content={APIResponse} />
      </div>
    );
  }
  if (platform === "instagram") {
    return (
      <div>
        instagram-render
        <PrettyJSON content={APIResponse} />
      </div>
    );
  }
  return <div>platform-render</div>;
}
