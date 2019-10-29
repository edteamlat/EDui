import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/index";

export default {
  title: "Button"
};

export const text = () => (
  <Button onClick={action("clicked")} color="second" full>
    Hello Button
  </Button>
);

export const emoji = () => (
  <Button onClick={action("clicked")} color="accent" ghost tiny>
    Hi Team
  </Button>
);
