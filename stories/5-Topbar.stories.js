import React from "react";
import { Topbar, EDgrid } from "../src";

export default {
  title: "Topbar"
};

export const PrimaryTopbar = () => (
  <Topbar color="dark">
    <EDgrid medium={2}>
      <p className="s-mb-1 m-mb-0 s-center m-left">Características > Topbar</p>
      <a className="button--cta button--tiny s-to-center m-to-right" href="#">
        Modelo de botón
      </a>
    </EDgrid>
  </Topbar>
);

export const ErrorTopbar = () => (
  <Topbar color="third">
    <EDgrid>
      <p className="s-center">Error</p>
    </EDgrid>
  </Topbar>
);
