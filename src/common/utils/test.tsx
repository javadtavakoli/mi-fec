import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router';
const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
