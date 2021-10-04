import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../../images/icons/LogoWhite.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <img src={LogoImage} alt="" />
      </Logo>
      <Menu>
        <li>
          <Link>Manage Books</Link>
        </li>
        <li>
          <Link>Add Book</Link>
        </li>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #19103f;
`;

const Logo = styled.h1`
  margin-top: 20px;
  width: 220px;
  margin: auto;
  & img {
    width: 100%;
    object-fit: contain;
  }
`;

const Menu = styled.ul`
  /* text-align: center; */
  /* padding-left: 50px; */
  margin-top: 50px;
  & li {
    margin-top: 10px;
    font-size: 18px;
    padding: 10px 0;
    display: block;
    list-style: none;
    &:hover {
      background: #2f216a;
    }
  }
`;
