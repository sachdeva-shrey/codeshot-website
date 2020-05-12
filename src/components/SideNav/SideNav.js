import React from "react";
import "semantic-ui-css/semantic.css";
import styled from "styled-components";
import GitHubButton from "react-github-button";
import "react-github-button/assets/style.css";

import DropdownWrapper from "../Dropdown/DropdownWrapper";
import Buttons from "../Button/Button";
import logo from "../../lib/icons/logo.png";

function SideNav({ takeSnap }) {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Buttons takeSnap={takeSnap} />
      <DropdownWrapper />
      <StarButton
        type="stargazers"
        size="small"
        namespace="shrey-sachdeva2000"
        repo="codeshot-website"
      />
      <ForkButton
        className="hallo"
        type="forks"
        namespace="shrey-sachdeva2000"
        repo="codeshot-website"
      />
    </Container>
  );
}

const Logo = styled.img`
  position: fixed;
  top: 20px;
  left: 7%;
  z-index: 10;
  height: 30px;
  width: auto;
`;

const Container = styled.div`
  position: fixed;
  z-index: 10;
`;

const StarButton = styled(GitHubButton)`
  position: fixed;
  bottom: 20px;
  left: 110px;
  z-index: 10;
`;

const ForkButton = styled(GitHubButton)`
  position: fixed;
  bottom: 20px;
  left: 200px;
  z-index: 10;
`;

export default SideNav;
