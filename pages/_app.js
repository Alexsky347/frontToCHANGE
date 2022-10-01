import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
