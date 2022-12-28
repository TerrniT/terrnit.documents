import type { NextPage } from "next";
import Main from "../components/main/main"
import Meta from "../components/meta/meta";
import Navbar from "../components/navbar/navbar";
import ProjectItem from "../components/works/project-item";
import Footer from "../components/footer/footer";
import Container from "../components/container/container";


const Home: NextPage = () => {
  return (
    <>
      <Meta title="about" />
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
    </>
  );
};

export default Home;

