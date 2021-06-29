import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import ButtonPanel from '../ButtonPanel';
import Display from '../Display';

describe('Display Display.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Display /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Display ButtonPanel.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><ButtonPanel /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
