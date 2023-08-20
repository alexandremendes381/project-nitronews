import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputCheckbox from '../components/InputCheckbox';


describe('InputCheckbox Component', () => {
  it('should render the InputCheckbox component', () => {
    render(<InputCheckbox id="night-mode" />);
    
    const inputCheckboxElement = screen.getByTestId('input-checkbox');
    expect(inputCheckboxElement).toBeInTheDocument();
  });

  it('should call onClick when checkbox is clicked', () => {
    const onClickMock = jest.fn();
    render(<InputCheckbox id="night-mode" onClick={onClickMock} />);
    

    const checkboxElement = screen.getByTestId('input-checkbox');
    fireEvent.click(checkboxElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

});
