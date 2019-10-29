import React from "react";
import { EDcontainer, EDitem } from "../src";

export default {
  title: "Flexbox"
};

export const FlexboxSample = () => (
  <EDcontainer>
    <EDitem small={20} medium={50}>
      1
    </EDitem>
    <EDitem small={50} medium={20}>
      2
    </EDitem>
    <EDitem small={30} medium={30}>
      3
    </EDitem>
    <EDitem
      small={100}
      medium={{ numerator: 1, denominator: Infinity }}
      large={{ numerator: 2, denominator: 3 }}
    >
      4
    </EDitem>
  </EDcontainer>
);
