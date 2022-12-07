import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";
export default function Header({ setSelectedTopic }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <header className="header">
      <h1>NC News </h1>
      <Link to={`/`} className="home">
        Home
      </Link>
      <select className="header-button" onChange={handleSubmit}>
        {isLoading ? (
          <option>Loading Topics...</option>
        ) : (
          topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })
        )}
      </select>
    </header>
  );
}
