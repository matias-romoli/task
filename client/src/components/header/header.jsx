import { colorContext } from "../../context/theme/themeContext";
import { useContext } from "react";
import "../../sass/style.scss";

function Header() {
  const { colors, setColors } = useContext(colorContext);

  function onColorDark() {
    return setColors("dark");
  }
  function onColorLight() {
    return setColors("light");
  }

  return (
    <header className="flex">
 <div className={`logo-${colors}`}>
  <a href="https://github.com/matias-romoli/task">
    <ion-icon name="logo-github"></ion-icon>
  </a>
</div>
      <div className={`colors-${colors} flex`}>
        <span onClick={onColorDark}>
          <ion-icon name="moon-outline"></ion-icon>
        </span>
        <span onClick={onColorLight}>
          <ion-icon name="sunny-outline"></ion-icon>
        </span>
      </div>
    </header>
  );
}

export default Header;
