import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

afterEach(cleanup)

const otherCurrentPhoto = {
    name: 'portraits', 
    description: 'Portraits of people in my life', 
    category: 'landscape', 
    index: 1
};
const mockOnClose = jest.fn();

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal onClose={mockOnClose} currentPhoto={otherCurrentPhoto} />);
    })

      // snapshot test
      it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(
            <Modal onClose={mockOnClose} 
                    currentPhoto={otherCurrentPhoto} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockOnClose}
        currentPhoto={otherCurrentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});  