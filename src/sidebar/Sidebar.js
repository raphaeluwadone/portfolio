import React, { useRef, useState, useEffect } from "react";

const Sidebar = ({open, setOpen}) => {

    const hamRef = useRef(null)
    console.log(hamRef.current);

    useEffect(() => {
        // hamRef.current.addEventListener('click', () => {
        //     if(!open) {
        //       hamRef.current.classList.add('open');
        //       setOpen(true)
        //     } else {
        //       hamRef.current.classList.remove('open');
        //       setOpen(false);
        //     }
        //   });
          if(open) {
            hamRef.current.classList.add('open');
            // setOpen(!open)
          } else {
            hamRef.current.classList.remove('open');
            // setOpen(!open);
          }
    }, [open])

    const toggleMenu = () => {
      if(!open) {
        hamRef.current.classList.add('open');
        setOpen(true)
      } else {
        hamRef.current.classList.remove('open');
        setOpen(false);
      }
    }

  return (
    <>
      <div className="menu_body">
        <div className="side_brand">Rafaelo</div>
        <div className="side-menu">
          <div className="menu-btn" ref={hamRef} onClick={toggleMenu}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
