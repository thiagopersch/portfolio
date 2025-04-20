'use client';

import Navbar from '@/templates/Navbar';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <Navbar />
      {children}
    </NextThemesProvider>
  );
}
