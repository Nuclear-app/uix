import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Page',
  description: 'Testing components and layouts',
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          {/* Add any test-specific layout elements here */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
} 