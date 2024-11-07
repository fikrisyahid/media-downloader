"use client";

import { Label } from "@/components/ui/label";
import PlatformSwitcher from "./platform-switcher";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, RefreshCcw } from "lucide-react";
import { getAPIResponse } from "../utils/downloader";
import { PLATFORM_LIST } from "../types";
import PlatformRenderer from "./platform-renderer";

export default function InputSection() {
  const [platform, setPlatform] = useState<PLATFORM_LIST>("youtube");
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [converted, setConverted] = useState<boolean>(false);
  const [APIResponse, setAPIResponse] = useState<Record<string, unknown>>({});

  const handleConvert = async () => {
    setLoading(true);
    try {
      const response = await getAPIResponse({ url, platform });
      setAPIResponse(response);
      setConverted(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setUrl("");
    setConverted(false);
  }, [platform]);

  return (
    <>
      <PlatformSwitcher platform={platform} setPlatform={setPlatform} />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="url">Media URL</Label>
        <Input
          type="url"
          id="url"
          placeholder="Insert video URL here"
          className="w-full"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-900 text-white hover:text-white"
        onClick={handleConvert}
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <RefreshCcw />
        )}
        Convert
      </Button>
      {converted && (
        <PlatformRenderer platform={platform} APIResponse={APIResponse} />
      )}
    </>
  );
}
