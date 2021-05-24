import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import Nav from '../Navigation';

describe('Display Navbar', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});