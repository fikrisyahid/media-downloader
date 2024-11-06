"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PlatformSwitcher({
  platform,
  setPlatform,
}: {
  platform: string;
  setPlatform: (e: string) => void;
}) {
  return (
    <Select value={platform} onValueChange={(e) => setPlatform(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="youtube">YouTube</SelectItem>
        <SelectItem value="instagram">Instagram</SelectItem>
        <SelectItem value="facebook">Facebook</SelectItem>
      </SelectContent>
    </Select>
  );
}
