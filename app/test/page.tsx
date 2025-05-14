'use client';

import LoginPage from '@/components/login';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Test component container with a nice background and padding
const TestContainer = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default function TestPage() {
  return (
    <div className="p-8">
      <Button>Click me</Button>
      {/* <LoginPage image="https://unsplash.com/photos/snowy-mountains-stand-tall-against-a-beautiful-sunset-zEIApnww3fU" /> */}
    </div>
  );
}
