import React from "react";
import SiteCard from "../components/SiteCard";
import { Layout } from "../containers/Layout";
import { sitesList } from "../data";

export const PopularSites = () => {
  return (
    <Layout>
      <div>
        <h3>Popular sites</h3>
        <p>dropdown</p>
      </div>
      <SiteCard sitesList={sitesList} />
    </Layout>
  );
};
