import { useEffect, useState } from "react";
import { getTopics } from "../api";

export default function Header() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((res) => {
      console.log(res);
      setTopics(res);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <header>
      <h1>NC News</h1>
      <select onChange={handleSubmit}>
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
