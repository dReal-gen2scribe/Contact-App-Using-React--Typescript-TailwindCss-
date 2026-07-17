import { SideBar } from "./Components/SideBar.tsx";
import Body from "./Components/Body.tsx";

const App = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <Body />
    </div>
  );
};
export default App;
