import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../../images/icons/LogoWhite.png";
import icon1 from "../../../images/icons/icon1.png";
import icon2 from "../../../images/icons/icon2.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <Link to="/">
          <img className="mt-3" src={LogoImage} alt="" />
        </Link>
      </Logo>
      <Menu>
        <MenuLink to="/manage-books">
          <img
            src={icon1}
            style={{ width: "25px", marginRight: "5px", marginTop: "-5px" }}
            alt=""
          />
          Manage Books
        </MenuLink>
        <MenuLink to="/add-book">
          <img
            src={icon2}
            style={{ width: "25px", marginRight: "5px", marginTop: "-5px" }}
            alt=""
          />
          Add Book
        </MenuLink>
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
  width: 90%;
  margin: auto;
  cursor: pointer;
  & img {
    width: 100%;
    object-fit: contain;
  }
`;

const Menu = styled.div`
  margin-top: 50px;
`;

const MenuLink = styled(Link)`
  font-weight: 600;
  padding: 10px 0;
  text-align: center;
  display: block;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  font-size: 22px;
  &:hover {
    background: #2f216a;
  }
`;
