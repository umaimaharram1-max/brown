import "./globals.css";
import Navbar from "./component/Navbar";

import Footer from "./component/Footer";

export const metadata = {
  title: "Coffee Time",
  description: "Best Coffee in Town",
};

export default function ({ children }) {
  return (
    <html lang="en">
      <body>
     
        <Navbar />
  
        {children}
        
        <Footer />
      </body>
    </html>
  );
}