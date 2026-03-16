"use client";

import React from "react";

export const CrtOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="crt-scanlines" />
      <div className="crt-vignette" />
      <div className="crt-flicker" />
    </div>
  );
};

