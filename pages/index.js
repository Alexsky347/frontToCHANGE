import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { Constant } from "@constants/constants.ts";
import React from "react";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: props.repositories,
    };
  }
  render() {
    return (
      <ContainerBlock
        title={Constant.meta.title}
        description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
      >
        <Hero />
        <FavouriteProjects />
        <LatestCode repositories={this.state.repositories} />
      </ContainerBlock>
    );
  }
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
