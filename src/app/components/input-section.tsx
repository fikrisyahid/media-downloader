"use client";

import { Label } from "@/components/ui/label";
import PlatformSwitcher from "./platform-switcher";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Loader2 } from "lucide-react";
import { getAPIResponse } from "../utils/downloader";
import { PLATFORM_LIST } from "../types";

export default function InputSection() {
  const [platform, setPlatform] = useState<PLATFORM_LIST>("youtube");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const handleDownload = async () => {
    setLoading(true);
    const response = await getAPIResponse({ url, platform });
    console.log(response);
    setLoading(false);
  };

  return (
    <>
      <PlatformSwitcher platform={platform} setPlatform={setPlatform} />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="url">Video URL</Label>
        <Input
          type="url"
          id="url"
          placeholder="Insert video URL here"
          className="w-full"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-900 text-white hover:text-white"
        onClick={handleDownload}
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <ArrowDown />
        )}
        Download
      </Button>
    </>
  );
}
