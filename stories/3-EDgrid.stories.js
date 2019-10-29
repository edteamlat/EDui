import React from "react";
import { EDgrid } from "../src";

export default {
  title: "EDgrid"
};

const testStyles = {
  background: "steelblue",
  color: "white",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export const Grid = () => (
  <EDgrid small={1} medium={3} large={5} gap={2} rowsGap>
    <div style={testStyles}>1</div>
    <div style={testStyles}>2</div>
    <div style={testStyles}>3</div>
    <div style={testStyles}>4</div>
    <div style={testStyles}>5</div>
  </EDgrid>
);
