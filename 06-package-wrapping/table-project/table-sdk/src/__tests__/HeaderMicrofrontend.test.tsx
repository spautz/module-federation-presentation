import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Internal_TablePlaceholder } from '../TableMicrofrontend.js';

describe('Internal_TablePlaceholder', () => {
  test('Renders without error', () => {
    render(<Internal_TablePlaceholder>My Content</Internal_TablePlaceholder>);

    expect(screen.getByText('My Content')).toBeVisible();
  });
});
