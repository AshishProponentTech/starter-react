import "./globals.css";

export const metadata = {
  title: "Starter React App",
  description: "GitHub Pages + Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
