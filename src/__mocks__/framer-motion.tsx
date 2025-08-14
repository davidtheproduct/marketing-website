import React from 'react';

// Minimal mock that renders children directly, ignoring animation props
const createMock = (Tag: keyof JSX.IntrinsicElements) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ({ children, initial, animate, whileInView, transition, exit, variants, ...restProps }: any) => (
    <Tag {...restProps}>{children}</Tag>
  );
};

export const motion = {
  div: createMock('div'),
  section: createMock('section'),
  span: createMock('span'),
};

export default { motion };
