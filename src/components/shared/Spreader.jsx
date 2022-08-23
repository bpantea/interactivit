import React from "react";

export function Spreader({ maxSize }) {
  return (
    <div
      style={{
        flexGrow: "1",
        maxWidth: maxSize ? maxSize : null,
      }}
    ></div>
  );
}
