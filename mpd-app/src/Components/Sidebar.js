import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";


const SidebarNav = styled.nav`
  background: #ffffff;
  border-right: 1px solid #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 60px;
  left: ${({ sidebar }) => ( sidebar? '0': '-100%')};
  transition = 350ms;
  z-index = 10;
`
const SidebarNav2 = styled.nav`
  background: #ffffff;
  border-right: 1px solid #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 60px;
  margin-left: 251px;
  left: ${({ ext }) => ( ext? '0': '-100%')};
  transition = 350ms;
  z-index = 10;
`

const SidebarWrap = styled.div`
  width : 100%:
`

const SidebarLink = styled(Link)`
  display: flex;
  color: #15171c;
  justify-content: space-between;
  align-item: center;
  padding: 20px;
  list-style: none;
  height: 30px;
  font-size: 18px;
  text-decoration: none;
  margin-right:60px;

  &:hover{
    cursor: pointer;
  }
`;
const SidebarLabel =styled.span`
  color: #15171c;


`;
const Dropdown = styled(Link)`
  height: 30px;
  padding-left: 2rem;
  display: flex;
  align-item: center;
  list-style: none;
  font-size: 15px;
  text-decoration: none;
  
`
const SideTitle = styled.div`
  font-size: 18px;
  color: #15171c;
  text-align: left;
  margin-top: 20px;
  width: 200px;
  border-bottom: 1.5px solid #15171c;
`

const Menu = ({item}) =>{
    const [submenu, setSubmenu]=useState(false);

    const showSubmenu =()=> setSubmenu(!submenu);

    const [ext, setExt]=useState(false);

    const showExt =()=> setExt(!ext);

    return(
        <>
            <SidebarLink to={item.path} onClick={item.subMenu && showSubmenu}>
                <div>
                    <SidebarLabel>
                        {item.title}
                        {item.subMenu && submenu 
                        ? item.arrowOpen 
                        : item.subMenu
                        ? item.arrowClosed
                        : null}
                    </SidebarLabel>
                </div>

            </SidebarLink>

            {submenu && item.subMenu.map((item, index) => {
                return (
                    <Dropdown to={item.path} key={index}>
                        <SidebarLabel onClick={item.extension && showExt}>
                            {item.title}
                            {item.extension && ext 
                            ? item.arrowOpen
                            : item.extension
                            ? item.arrowClosed
                            : null}
                        </SidebarLabel>
                        
                        <SidebarNav2 ext={ext}>
                            <SidebarWrap>
                                <SideTitle>{item.title}</SideTitle>
                                 </SidebarWrap>
                        </SidebarNav2>
                        
                        
                    </Dropdown>
                )
            })}
        </>
    )
}





const Sidebar = () =>{

    const [sidebar, setSidebar]=useState(false)

    const showSidebar =()=> setSidebar(!sidebar)

    return (
    <>

      <SidebarNav sidebar = {sidebar}>
        <SidebarWrap>
            {SidebarData.map((item, index)=> {
                return <Menu item={item} key={index} />;
            })}

        </SidebarWrap>
      </SidebarNav>
    </>
    )
};



export default Sidebar;