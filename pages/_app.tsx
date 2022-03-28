import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component: Page, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
