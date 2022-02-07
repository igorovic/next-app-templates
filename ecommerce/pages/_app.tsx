import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import store from "app/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
