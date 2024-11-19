import React from "react";
import "./HomePage.css";

const HomePage = () => {
  const skilledUsers = [
    { id: 1, name: "John Doe", skill: "Full Stack Developer" },
    { id: 2, name: "Jane Smith", skill: "Data Scientist" },
    { id: 3, name: "Alice Johnson", skill: "AI Researcher" },
  ];

  const openChatbot = () => {
    alert("Navigating to Chatbot Interface... (Chatbot Page Coming Soon)");
  };

  return (
    <div className="home-container">
      {/* Taskbar */}
      <nav className="taskbar">
        <div className="logo">Study Bridge</div>
        <div className="menu-icons">
          <span>🏠 Home</span>
          <span>🔍 Search</span>
          <span>🔔 Notifications</span>
          <span>👨‍🏫 Mentors</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* Suggestions Section */}
        <div className="suggestions">
          <h2>Suggested Profiles</h2>
          <div className="profiles">
            {skilledUsers.map((user) => (
              <div key={user.id} className="profile-card">
                <h3>{user.name}</h3>
                <p>{user.skill}</p>
                <button>View Profile</button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chatbot Section */}
        <div className="chatbot" onClick={openChatbot}>
          <img
            src="https://via.placeholder.com/150"
            alt="AI Chatbot"
            className="chatbot-image"
          />
          <p>Ask our AI Chatbot</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
