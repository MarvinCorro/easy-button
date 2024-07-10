import React from "react";

import Button from "./button/Button.js";

export function App() {

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: '100%',
      width: '100%',
    }}>
      <Button size="sm" style="primary" text="Small Button" />
      <Button size="sm" style="secondary" text="Small Button" />
      <Button size="md" style="tertiary" text="Medium Button" />
      <Button size="lg" style="link color" text="Large Button" />
      <Button size="xl" style="link gray" text="Extra Large Button" />
      <Button size="xl" style="destructive" text="Extra Large Button" />
    </div>
  );
}