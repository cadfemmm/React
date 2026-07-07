import Toolbox from "./left/Toolbox";
import Canvas from "./center/Canvas";
import SettingsPanel from "./right/SettingsPanel";
import "./styles.css";

export default function Layout() {
  return (
    <div className="fb-container">
      <Toolbox />
      <Canvas />
      <SettingsPanel />
    </div>
  );
}