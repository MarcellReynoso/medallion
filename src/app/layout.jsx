import "./globals.css";

export const metadata = {
  title: "Medallion",
  description: "Medallion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  );
}
