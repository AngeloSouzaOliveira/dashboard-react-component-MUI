import { render, screen } from '@testing-library/react';
import App from './App';

test('testes titulo', () => {
  render(<App />);
  
  const testCase = document.querySelector(".App h1");
  expect(testCase).toHaveTextContent(/painel de controle/i);
});
