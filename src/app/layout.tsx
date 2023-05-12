import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["italic"],
  subsets: ["latin"],
});
const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fylo - Ken Vilar",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${openSans.className} dark:bg-darkBlue dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
