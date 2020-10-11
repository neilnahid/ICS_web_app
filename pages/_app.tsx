import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
// import App from "next/app";
import type { AppProps /* , AppContext */ } from 'next/app';
import '../styles/main.css';
import { useState } from 'react';
import Session from '../hooks/session';

const link = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URI}`,
  credentials: 'include',
});

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URI}`,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link,
});
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Session.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Session.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
