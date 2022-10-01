import React from "react";
import { render } from "react-dom";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <ContainerBlock title="Projects - Manu Arora">
        <Projects />
      </ContainerBlock>
    );
  }
}
