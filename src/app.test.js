import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter component', () => {
  it('show the default count text', () => {
    render(<Counter />);
    const element = screen.getByTestId('count-result');
    expect(element.textContent).toBe('0');
  });

  it('increments count', () => {
    render(<Counter />);
    userEvent.click(screen.getByTestId('up'));
    expect(screen.getByTestId('count-result').textContent).toBe('1');
  });

  it('decrements count', () => {
    render(<Counter />);
    userEvent.click(screen.getByTestId('down'));
    expect(screen.getByTestId('count-result').textContent).toBe('-1');
  });

  it('does not show showSomething variable', async () => {
    render(<Counter />);
    const element = screen.getByTestId('show-something');
    expect(element).not.toBeNull();
    expect(element.textContent).toBe('showSomething:true');
  });

  // it('sets increment value', () => {
  //   const input = wrapper.find('input');
  //   input.simulate('change', { target: { value: '100' } });
  //   const incrementIndicator = wrapper.find('span').at(0);
  //   expect(incrementIndicator.text()).to.equal('counting by 100');
  // });

  // it('counts by the increment value', () => {
  //   const input = wrapper.find('input');
  //   input.simulate('change', { target: { value: '100' } });
  //   const upBtn = wrapper.find('button[children="Up"]');
  //   upBtn.simulate('click');
  //   const countLabel = wrapper.find('span').at(1);
  //   console.log(countLabel.text());
  //   expect(countLabel.text()).to.eql('100');
  // });
});
