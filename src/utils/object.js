function objectHasProperties(object, properties) {
  if (typeof object !== "object") {
    return false;
  }
  return properties.every(property => object.hasOwnProperty(property));
}

export { objectHasProperties };
