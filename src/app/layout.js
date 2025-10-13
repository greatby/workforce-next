import WindsurfNav from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Workforce - India's Employment Law Infrastructure",
  description:
    "Workforce executes employment law compliance for Indian companies—EPF, ESIC, Factories Act, S&E, Contract Labour—across all 36 states. Monthly compliance, registrations, and closures handled automatically. Zero penalties guaranteed.",
      alternates: { canonical: "https://workforce.com" },
  openGraph: {
    title: "Workforce - India's Employment Law Infrastructure",
    url: "https://workforce.com",
  },
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
