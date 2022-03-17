import { Icon } from "@iconify/react";
import "../scss/App.scss";
const DarkMode = ({ changeTheme, checked }) => {
  return (
    <div className="toggle-theme-wrapper">
      <Icon icon="emojione:sun-with-face" className="sun-emoji" />
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          // NEW
          onChange={changeTheme}
          defaultChecked={checked}
        />
        <div className="slider round"></div>
      </label>
      <Icon icon="twemoji:owl" className="owl-emoji" />
    </div>
  );
};
export default DarkMode;
