import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <main className="features-main">
      <header>
        <h1>
          A modal verb is a type of auxiliary (helping) verb used to express
          necessity, possibility, ability, or permission
        </h1>
      </header>
      <div className="features">
        <div className="feature-card">
          <h2>
            What <span style={{ color: "#480091" }}>COULD</span> you do?
          </h2>
          <p>Obviously you have things that you could get done</p>
          <p>These are your tasks!</p>
        </div>
        <div className="feature-card">
          <h2>
            What <span style={{ color: "#480091" }}>SHOULD</span> you do?
          </h2>
          <p>
            If you could rank your tasks by importance and urgency, you could
            focus on what truly matters.
          </p>
          <p>These are your TOP priorities!</p>
        </div>
        <div className="feature-card">
          <h2>
            What <span style={{ color: "#480091" }}>WOULD</span> you do?
          </h2>
          <p>What are you willing to get done?</p>
          <p>These are your major focus areas for right now!</p>
        </div>
      </div>
    </main>
  );
};

export default Features;
