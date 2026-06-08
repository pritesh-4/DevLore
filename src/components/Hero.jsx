import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
           Welcome to DevLore
        </span>

        <h1>
          Learn. Challenge.
          <br />
          <span>Grow Every Day.</span>
        </h1>

        <p>
          DevLore turns curiosity into progress.
          Choose a topic, challenge yourself,
          and track your growth one quiz at a time.
        </p>

        <div className="hero-quote">
          “The beautiful thing about learning is that
          no one can take it away from you.”
        </div>

        <div className="hero-buttons">
          <button
            onClick={() => navigate("/quizsetup")}
          >
            Start Quiz
          </button>

         </div>

      </div>

      <div className="hero-image">
        <div className="hero-circle"></div>

        <div className="floating-card">
          📚 Good Questions
        </div>

        <div className="floating-card">
          🎯 Track Progress
        </div>

        <div className="floating-card">
          ⚡ Instant Results
        </div>
      </div>

    </section>
  );
};

export default Hero;