import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './component';

describe('Button', () => {
  it('Default button renders correctly', () => {
    const tree = renderer.create(<Button>Button Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
