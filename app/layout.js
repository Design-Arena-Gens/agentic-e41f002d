export const metadata = {
  title: 'AI Human',
  description: 'An AI-like human interaction experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
