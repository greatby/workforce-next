import "./globals.css";

export const metadata = {
  title: "Workforce | Empowering India's Workforce",
  description: "From People to Pioneering AI Agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
