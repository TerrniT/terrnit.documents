import type { NextPage } from "next";
import Main from "../../components/main/main"
import ProjectItem from "../../components/works/project-item";
import Navbar from "../../components/navbar/navbar";
import Meta from "../../components/meta/meta";
import Footer from "../../components/footer/footer";
import Container from "../../components/container/container";


const Portfolio: NextPage = () => {
  return (
    <>
      <Meta title="portfolio" />
      <Main>
        <Navbar />
        <Container>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </Container>
        <Footer />
      </Main>
    </ >
  );
};

export default Portfolio;
