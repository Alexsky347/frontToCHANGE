import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default class AboutPage extends React.Component {
  render() {
    return (
      <ContainerBlock>
        <AboutMe />
      </ContainerBlock>
    );
  }
}
