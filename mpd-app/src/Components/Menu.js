import React,{useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

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
                    </Dropdown>
                )
            })}
        
        
        </>
    )

}

export default Menu;