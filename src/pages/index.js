import * as React from "react";
import TopNavigationBar from "../components/TopNavBar/TopNavBar";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <TopNavigationBar />
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <Seo title="Home Page" />;
