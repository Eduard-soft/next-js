import './globals.css'
import Menu from './Menu'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <Menu />
        {children}</body>
    </html>
  )
}
