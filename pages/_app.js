import Layout from "../layouts/Layout";
import "../styles/globals.css";
import { Provider } from "../context/index";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;
