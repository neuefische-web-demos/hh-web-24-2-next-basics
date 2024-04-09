import "@/styles/globals.css";

export default function App({ Component: PageContent, pageProps }) {
  return <PageContent {...pageProps} />;
}
