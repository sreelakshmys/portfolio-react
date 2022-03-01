import React, { useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { Icon } from "@iconify/react";

export default function Header({ checked, changeTheme }) {
  // useState variables
  const [isShown, setIsShown] = useState(false);

  const HeaderTitleTypeAnimation = React.memo(() => {
    return (
      <Typical
        className="title-styles"
        steps={["FULL STACK WEB DEVELOPER", 3000, "REACT DEVELOPER", 2000]}
        loop={Infinity}
        wrapper="p"
      />
    );
  });

  return (
    <header className="header-aligner">
      <div>
        <Icon
          icon="pepicons:text-bubble"
          className="thought-bubble"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        <h1 className="dev-name">Sreelakshmy S</h1>
      </div>
      {isShown && (
        <div className="bubble-text">"More like shri-luck-shmeee"</div>
      )}
      <div className="title-animation">
        <HeaderTitleTypeAnimation />
      </div>
      <div className="switch">
        <Switch
          checked={checked}
          onChange={changeTheme}
          offColor="#baaa80"
          onColor="#353535"
          className="react-switch"
          width={90}
          height={40}
          uncheckedIcon={<Icon icon="twemoji:owl" className="owl-emoji" />}
          checkedIcon={
            <Icon icon="emojione:sun-with-face" className="sun-emoji" />
          }
          id="icon-switch"
        />
      </div>
    </header>
  );
}
