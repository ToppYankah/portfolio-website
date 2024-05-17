import "./globals.css";
import type { Metadata } from "next";
import localFont from "@next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import CustomPointer, {
  PointerContextProvider
} from "../global_components/pointer";
import InteractiveGrid from "@/global_components/interactive-grid";

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

const pp_acma = localFont({
  src: [
    // {
    //   path: "../../public/fonts/PPAcma-Thin.otf",
    //   weight: "200"
    // },
    // {
    //   path: "../../public/fonts/PPAcma-Light.otf",
    //   weight: "300"
    // },
    // {
    //   path: "../../public/fonts/PPAcma-Semibold.otf",
    //   weight: "600"
    // },
    // {
    //   path: "../../public/fonts/PPAcma-Black.otf",
    //   weight: "900"
    // }
    {
      path: "../../public/fonts/Copyright.woff2"
    }
  ],
  variable: "--font-pp-acma"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${pp_acma.variable} ${ibm_plex_sans.className}`}
      lang="en"
    >
      <body>
        <PointerContextProvider>
          <>
            <InteractiveGrid />
            {children}
            <CustomPointer />
          </>
        </PointerContextProvider>
      </body>
    </html>
  );
}
