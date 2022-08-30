import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Meta title="Home" keywords="ecommerce, Home" />
      <Layout>
        <h3>This is home page</h3>
      </Layout>
    </div>
  );
}
