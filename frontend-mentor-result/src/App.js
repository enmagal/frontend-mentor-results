import { useRef } from "react";

import "./App.css";
import ProjectCards from "./components/ProjectCards";
import FaqAccordion from "./faq-accordion/FaqAccordion";
import NewsletterSignUp from "./newsletter-sign-up/NewsletterSignUp";
import SocialLinks from "./components/SocialLinks";
import BlogPreviewCard from "./blog-preview-card/BlogPreviewCard";
import AgeCalculator from "./age-calculator/AgeCalculator";

const dataProjects = [
  {
    name: "FAQ accordion",
    content: {
      date: "16-02-2024",
      level: "Newbie",
    },
  },
  {
    name: "Newsletter sign-up form with success message",
    content: {
      date: "18-02-2024",
      level: "Junior",
    },
  },
  {
    name: "Blog preview card",
    content: {
      date: "18-02-2024",
      level: "Newbie",
    },
  },
  {
    name: "Age calculator app",
    content: {
      date: "22-02-2024",
      level: "Junior",
    },
  },
];

function App() {
  const projectsRef = useRef(null);
  function handleScrollToProjects() {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }

  return (
    <div className="App">
      <div className="linksBar">
        <SocialLinks />
      </div>
      <header className="App-header">
        <h1 className="appTitle">
          Here are my <em>Amazing</em> <br /> Frontend Mentor Results
        </h1>
        <div className="buttons">
          <a
            target="_blank"
            rel="noreferrer"
            className="landingButton"
            href="https://bento.me/enzomagal"
          >
            See my Bento
          </a>
          <button className="landingButton" onClick={handleScrollToProjects}>
            The projects
          </button>
        </div>
      </header>
      <div className="projects">
        <h2 id="Projects" ref={projectsRef}>
          Projects
        </h2>
        <div className="projectRow">
          {dataProjects &&
            dataProjects.map(({ name, content }) => (
              <ProjectCards key={name} title={name} content={content} />
            ))}
        </div>
      </div>
      <FaqAccordion />
      <NewsletterSignUp />
      <BlogPreviewCard />
      <AgeCalculator />
    </div>
  );
}

export default App;
