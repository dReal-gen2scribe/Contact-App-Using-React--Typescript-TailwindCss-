import { FaBars, FaGears, FaRegEnvelope } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const iconStyle = "transition-transform duration-200 hover:scale-120 cursor-pointer";

  return (
    <>
      <aside className="SideBar-Container w-14 h-screen bg-blue-900 pt-2 outline-none">
        <nav className="flex flex-col items-center text-3xl h-full w-full text-white">
          <div className="mb-4 h-1/5">
            <FaBars className={iconStyle} />
          </div>

          <div className="flex-1 flex flex-col gap-7">
            <Link to="/">
              <IoHomeSharp className={iconStyle} />
            </Link>
            <Link to="/contacts">
              <RiContactsBook3Fill className={iconStyle} />
            </Link>
            <Link to="/message">
              <FaRegEnvelope className={iconStyle} />
            </Link>
            <Link to="/settings">
              <FaGears className={iconStyle} />
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};
