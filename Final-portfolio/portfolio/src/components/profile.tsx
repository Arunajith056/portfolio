import React from "react";
import profileimg from "../assets/images/Ajith.jpg";

const Profile: React.FC = () => {
  return (
    <div className="App relative">
      <div className="fixed top-5 left-5 z-50">
        <div className="rounded-full overflow-hidden w-16 h-16 border-2 border-blue-100 opacity-100 shadow-2xl shadow-slate-200 hover:w-20 hover:h-20 transition-all duration-300 ease-in-out">
          <img
            src={profileimg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 1000 }}
          />
        </div>
      </div>
      <div className="content relative z-20">{/* Your content here */}</div>
    </div>
  );
};

export default Profile;
