import { createElement } from 'react';
import styled from 'styled-components';

export const withDynamicTag = (Component) => {
  const bucket = Object.create(null);

  const DynamicTag = (props) => {
    const { tag } = props;

    if (typeof tag !== 'string' || !styled.hasOwnProperty(tag)) {
      return createElement(Component, props);
    }

    if (bucket[tag] === undefined) {
      bucket[tag] = Component.withComponent(tag);
    }

    return createElement(bucket[tag], props);
  };

  const name = Component.displayName || Component.constructor.name;

  if (name) {
    DynamicTag.displayName = `DynamicTag(${name})`;
  }

  return DynamicTag;
};
