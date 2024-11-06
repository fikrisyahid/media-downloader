"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import { PLATFORM_LIST } from "../types";

export default function PlatformSwitcher({
  platform,
  setPlatform,
}: {
  platform: PLATFORM_LIST;
  setPlatform: Dispatch<SetStateAction<PLATFORM_LIST>>;
}) {
  return (
    <Select
      value={platform}
      onValueChange={(e) => setPlatform(e as PLATFORM_LIST)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="youtube">YouTube</SelectItem>
        <SelectItem value="spotify">Spotify</SelectItem>
        <SelectItem value="facebook">Facebook</SelectItem>
        <SelectItem value="tiktok">TikTok</SelectItem>
        <SelectItem value="twitter">Twitter</SelectItem>
        <SelectItem value="instagram">Instagram</SelectItem>
      </SelectContent>
    </Select>
  );
}
