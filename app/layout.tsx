import "./globals.css";

export const metadata = {
  title: "My First Next App",
  description: "Learning Next.js frontend development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}