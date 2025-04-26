import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
  title: "Medallion",
  description: "Medallion",
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
