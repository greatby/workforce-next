import WindsurfNav from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Workforce | Empowering India's Workforce",
  description: "From People to Pioneering AI Agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <WindsurfNav />
        {children}
        <Footer />
      <div id="modal-root"></div>
      </body>
    </html>
  );
}
