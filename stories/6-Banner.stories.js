import React from "react";
import { Banner } from "../src";

export default {
  title: "Banner"
};

export const PrimaryBanner = () => (
  <Banner
    image="https://images.pexels.com/photos/1981043/pexels-photo-1981043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    imageAlt="Test picture"
    diagonal
  >
    <h1>Banner</h1>
  </Banner>
);

export const DarkBanner = () => (
  <Banner
    color="dark"
    image="https://images.pexels.com/photos/1981043/pexels-photo-1981043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    imageAlt="Test picture"
    diagonal
  >
    <h1>Banner</h1>
  </Banner>
);

export const AccentBanner = () => (
  <Banner
    color="accent"
    image="https://images.pexels.com/photos/1981043/pexels-photo-1981043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    imageAlt="Test picture"
    diagonal
  >
    <h1>Banner</h1>
  </Banner>
);
