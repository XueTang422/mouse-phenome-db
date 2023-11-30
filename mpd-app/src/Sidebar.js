import React,{useState} from 'react';
import './Navbar1.css';
import Submenu from './Submenu';

export default function Sidebar({item, index, status}){

    const [submenu, setSubmenu]=useState(false);

    const showSubmenu =()=> setSubmenu(!submenu);



    if(item.subMenu){
        return(
        <>
        <li key={index} className={item.type} onClick={showSubmenu}>
      
            <a>{item.title}</a>
            {submenu?item.arrowOpen:item.arrowClosed}
        

        </li>
        <div className={submenu&&status? 'submenu active':'submenu'}>

            {item.subMenu.map((item, index) => <Submenu key={index} item={item} status={status&&submenu}/>) }

        </div>
        </>
  
        )
      }else{
        return(
          <li key={index} className={item.type}>
            <a href={item.path} >{item.title}</a>
          </li>
  
        )
      }
}

