// import { useState, useEffect } from "react";
// import "./SearchComponent.css"; // Import the CSS file

// const SearchComponent = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (!query) {
//       setResults([]);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setResults([`Result for "${query}"`, `Another match for "${query}"`]);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [query]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchComponent;

import { useState, useEffect } from "react";
import "./SearchComponent.css"; // Import the CSS file

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      setResults([`Result for "${query}"`, `Another match for "${query}"`]);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
