import "@/css/fonts.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import '../../styles/globals.css';
import "swiper/css/navigation";
//
import "@/css/main.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
