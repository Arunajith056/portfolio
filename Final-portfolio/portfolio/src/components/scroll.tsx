import item1 from "../assets/images/html5-logo-31813.png";
import item2 from "../assets/images/javascript-39395.png";
import item3 from "../assets/images/1174949_js_react js_logo_react_react native_icon.png";
import item4 from "../assets/images/317756_badge_css_css3_achievement_award_icon.png";
import item5 from "../assets/images/4375050_logo_python_icon.png";
import item6 from "../assets/images/315437_document_sql_file_icon.png";
import item7 from "../assets/images/2993773_git_social media_icon.png";
import AnimatedTooltip from "../ui/logos";
import "../App.css";
const items = [
  {
    id: 1,
    name: "SEO",
    designation: '<meta name="description" content="portfolio">',
    image: item1, // Specify the URL of your image
  },
  {
    id: 2,
    name: "Async",
    designation: "async fetchData(()=>{})={...}",
    image: item2,
  },
  {
    id: 3,
    name: "Virtual-Dom",
    designation: "export default const App=()=>{<>...</>}",
    image: item3,
  },
  {
    id: 4,
    name: "@keyframes",
    designation: ":root{--primary-color: #3498db;}",
    image: item4,
  },
  {
    id: 5,
    name: "Versatile",
    designation: "def wake_up(hour,min):",
    image: item5,
  },
  {
    id: 6,
    name: "CRUD",
    designation: "CREATE TABLE Users ()",
    image: item6,
  },
  {
    id: 7,
    name: "Version Control",
    designation: "git clone 'AJ/portfolio':",
    image: item7,
  },
  // Add more items as needed
];

const CircleCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <AnimatedTooltip items={items} /> {/* Pass the items array as props */}
    </div>
  );
};

export default CircleCards;
