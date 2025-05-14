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
      <Button variant="btnLight">Let me add some more big random text</Button>
      <Button variant="btnDark">Click me</Button>
      <Button variant="btnLight" image="https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"></Button>
      {/* <LoginPage image="https://unsplash.com/photos/snowy-mountains-stand-tall-against-a-beautiful-sunset-zEIApnww3fU" /> */}
    </div>
  );
}
