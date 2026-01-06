import { useState } from "react";

function App() {
  const [projectSize, setProjectSize] = useState("small");
  const [seoNeed, setSeoNeed] = useState("no");
  const [teamType, setTeamType] = useState("solo");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>🧠 Tech Stack Referee</h1>
      <p>
        This tool compares <strong>React</strong> and <strong>Next.js</strong>
        based on your project constraints and explains the trade-offs.
      </p>

      <hr />

      <h2>Project Details</h2>

      <label>
        Project Size:
        <select
          value={projectSize}
          onChange={(e) => setProjectSize(e.target.value)}
        >
          <option value="small">Small</option>
          <option value="large">Large</option>
        </select>
      </label>

      <br /><br />

      <label>
        SEO Required?
        <select
          value={seoNeed}
          onChange={(e) => setSeoNeed(e.target.value)}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </label>

      <br /><br />

      <label>
        Team Type:
        <select
          value={teamType}
          onChange={(e) => setTeamType(e.target.value)}
        >
          <option value="solo">Solo Developer</option>
          <option value="team">Team</option>
        </select>
      </label>

      <hr />

      <h2>Comparison</h2>

      <h3>⚛️ React</h3>
      <ul>
        <li>Simple and flexible library</li>
        <li>Easy learning curve</li>
        <li>Best for small to medium projects</li>
        <li>SEO requires additional setup</li>
      </ul>

      <h3>▲ Next.js</h3>
      <ul>
        <li>Framework built on React</li>
        <li>Built-in routing and SEO support</li>
        <li>Better performance for large apps</li>
        <li>More structure and conventions</li>
      </ul>

      <hr />

      <h2>Trade-off Explanation</h2>

      <p>
        {seoNeed === "yes" ? (
          <>
            Since SEO is important, <strong>Next.js</strong> provides
            server-side rendering and better search engine visibility out of
            the box. React can still be used, but it will require extra tools
            and configuration.
          </>
        ) : (
          <>
            SEO is not a priority, so <strong>React</strong> offers a simpler
            and more flexible setup without additional framework complexity.
          </>
        )}
      </p>

      <p>
        {projectSize === "large" ? (
          <>
            For large-scale applications, <strong>Next.js</strong> helps by
            providing structure, performance optimizations, and scalability.
          </>
        ) : (
          <>
            For smaller projects, <strong>React</strong> keeps development fast
            and lightweight.
          </>
        )}
      </p>

      <p>
        {teamType === "team" ? (
          <>
            In a team environment, <strong>Next.js</strong> enforces conventions
            that improve collaboration and consistency.
          </>
        ) : (
          <>
            For solo developers, <strong>React</strong> allows faster
            experimentation and fewer constraints.
          </>
        )}
      </p>

      <hr />

      <h3>Final Note</h3>
      <p>
        There is no single “best” choice. The right option depends on your
        project goals, scale, and constraints. This tool highlights trade-offs
        to support informed decision-making.
      </p>
    </div>
  );
}

export default App;
