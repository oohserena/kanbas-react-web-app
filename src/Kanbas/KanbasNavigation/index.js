import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsInboxFill } from "react-icons/bs"
import { TbLetterN } from "react-icons/tb";
import { BiTime } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";
import { CiGrid32 } from "react-icons/ci";
import { BiHelpCircle } from "react-icons/bi";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsInboxFill className="wd-icon" />,
    History: <BiTime className="wd-icon" />,
    Studio: <FaComputer className="wd-icon" />,
    Commons: <CiGrid32 className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>

      <TbLetterN className="wd-logo" />

      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
