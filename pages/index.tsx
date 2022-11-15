import type { NextPage } from "next";

import Meta from "../components/meta/meta"
import Navbar from "../components/navbar/navbar";
import ProjectItem from "../components/works/project-item";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <Layout>
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-12 w-full max-w-8xl mt-8 lg:mt-20">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
        <Footer />
      </Layout>

    </div >
  );
};

export default Home;
