
"use client"
import { buildUrlQuery } from "@/functions/helpers";
import { useChangeSearchParams } from "@/hooks";
import { apis, appCookies } from "@/utils";
import React from "react";
import { useCookie } from "react-use";


export const DownloadReport: React.FC = () => {
  const { params } = useChangeSearchParams();
  const [accessToken] = useCookie(appCookies.accessToken);

  const handleDownload = async () => {
    try {
      const paramsObj = Object.fromEntries(params.entries());
      const response = await fetch(
        apis.admin.adminReport +
          buildUrlQuery({ ...paramsObj, export: "true" }),
        {
          method: "GET",
          headers: {
            "x-access-token": accessToken ?? "",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "report";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="btn-primary !px-6"
    >
      download
    </button>
  );
};

