import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders without crashing', () => {
    render(<TodoList />);
});

test('renders the doing', () => {
    render(<TodoList />);
    const titleElement = screen.getByText(/DOING/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders the done', () => {
    render(<TodoList />);
    const titleElement = screen.getByText(/DONE/i);
    expect(titleElement).toBeInTheDocument();
}
);

test('renders the form', () => {
    render(<TodoList />);
    const formElement = screen.getByText(/Add Todo/i);
    expect(formElement).toBeInTheDocument();
}
);


// Test that a new todo can be added
test('can add a new todo', () => {
    const { getByLabelText, getByText } = render(<TodoList />);
    
    // Assuming your TodoForm uses an input with label "New Todo"
    const input = getByLabelText('New Todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    
    // Assuming your TodoForm uses a button with text "Add Todo" to submit
    const addButton = getByText('Add Todo');
    fireEvent.click(addButton);
    
    // Check that the new todo is displayed in the list
    // This assumes that TodoItem displays the todo text in a span
    expect(getByText('Test Todo')).toBeInTheDocument();
  });