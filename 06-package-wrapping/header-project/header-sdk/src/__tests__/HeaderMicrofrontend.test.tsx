import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Internal_HeaderPlaceholder } from '../HeaderMicrofrontend.js';

describe('Internal_HeaderPlaceholder', () => {
  test('Renders without error', () => {
    render(<Internal_HeaderPlaceholder>My Content</Internal_HeaderPlaceholder>);

    expect(screen.getByText('My Content')).toBeVisible();
  });
});
