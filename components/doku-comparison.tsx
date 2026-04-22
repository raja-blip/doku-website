"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export const DokuComparison = () => (
  <div className="w-full overflow-hidden rounded-xl border border-border">
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/manual-chaos.png" alt="Google Drive Chaos" />}
      itemTwo={<ReactCompareSliderImage src="/doku-clarity.png" alt="Doku Precision" />}
      style={{ height: "100%", width: "100%", borderRadius: "12px", border: "1px solid #1f1f1f" }}
    />
  </div>
);
