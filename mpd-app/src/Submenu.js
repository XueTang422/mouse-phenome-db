import React,{useState} from 'react';
import './Navbar1.css';

export default function Submenu({item, index,status}){

    let [ext, setExt]=useState(false);
  
    const showExt =()=> setExt(!ext);


    if(item.submenu){
        return(
            <>
            <div key={index} className={item.type} onClick={showExt}>
                <a>{item.title}
                {ext?item.arrowOpen:item.arrowClosed}
                </a>     
            </div>
            <div className={status&&ext? 'sidebar2 active':'sidebar2'}>
                <ul>
                <li className='sidebar2-title'>{item.title}</li>
                {item.submenu.map((item, index) => {
                    return(
                        <li key={index} className={item.type}>
                            <a href={item.path} >{item.title}</a>
                        </li>
                    )  
                })}
                </ul>
            </div>
            </>
  
        )
      }else{
        return(
          <div key={index} className={item.type}>
            <a href={item.path} >{item.title}</a>
          </div>
  
        )
      }
}

