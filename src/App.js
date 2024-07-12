import React from "react";

import Button from "./button/Button.js";

export function App() {

  let res = []

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: '100%',
      width: '100%',
    }}>
      <div>
        <Button size="sm" style="primary" text="Button CTA" />
        <Button size="md" leadingIcon={'star'} style="primary" text="Button CTA" />
        <Button size="lg" trailingIcon={'star'} style="primary" text="Button CTA" />
        <Button size="extra-large" style="primary" text="Button CTA" />
        <Button size="icon-small" leadingIcon={'star'} style="primary" text="" />
      </div>
      <div>
        <Button size="sm" style="secondary" text="Button CTA" />
        <Button size="md" leadingIcon={'star'} style="secondary" text="Button CTA" />
        <Button size="lg" trailingIcon={'star'} style="secondary" text="Button CTA" />
        <Button size="extra-large" style="secondary" text="Button CTA" />
        <Button size="icon-small" leadingIcon={'star'} style="secondary" text="" />
      </div> 
      <div>
        <Button size="sm" style="tertiary" text="Button CTA" />
        <Button size="md" leadingIcon={'star'} style="tertiary" text="Button CTA" />
        <Button size="lg" trailingIcon={'star'} style="tertiary" text="Button CTA" />
        <Button size="extra-large" style="tertiary" text="Button CTA" />
        <Button size="icon-small" leadingIcon={'star'} style="tertiary" text="" />
      </div>
      <div>
        <Button size="sm" style="link-color" text="Button CTA" />
        <Button size="md" leadingIcon={'star'} style="link-color" text="Button CTA" />
        <Button size="lg" trailingIcon={'star'} style="link-color" text="Button CTA" />
        <Button size="extra-large" style="link-color" text="Button CTA" />
        <Button size="icon-small" leadingIcon={'star'} style="link-color" text="" />
      </div>
      <div>
        <Button size="sm" style="link-gray" text="Button CTA" />
        <Button size="md" style="link-gray" text="Button CTA" />
        <Button size="lg" style="link-gray" text="Button CTA" />
        <Button size="extra-large" style="link-gray" text="Button CTA" />
        <Button size="icon-small" leadingIcon={'star'} style="link-gray" text="" />
      </div>
      <div>
        <Button size="sm" style="destructive" text="Button CTA" />
        <Button size="md" style="destructive" text="Button CTA" />
        <Button size="lg" style="destructive" text="Button CTA" />
        <Button size="extra-large" style="destructive" text="Button CTA" />
        <Button size="icon-small" leadingIcon={'star'} style="destructive" text="" />
      </div>
    </div>
  );
}