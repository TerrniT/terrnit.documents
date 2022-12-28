import type { NextPage } from "next";

import Main from "../components/container";
import Footer from "../components/footer";
import ProjectItem from "../components/works/project-item";
import Grid from "../components/grid";

const Portfolio: NextPage = () => {
  return (
    <Main>
      <Grid>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </Grid>
      <Footer />
    </Main>
  );
};

export default Portfolio;
