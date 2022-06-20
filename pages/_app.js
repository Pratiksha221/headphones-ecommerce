import "../styles/globals.css";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import { StateContext } from "../context/StateContext";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-WSPVSGL" });
  }, []);
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
