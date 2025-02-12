import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(false);
  const [code, setCode] = useState("function fetchData() {return a+b}");
  const [response, setResponse] = useState("");
  useEffect(() => {
    prism.highlightAll();
  });

  const codeReview = async () => {
    setLoader(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/get-review",
        {
          code,
        }
      );
      setResponse(response.data.response);
      if (response) {
        setLoader(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript)
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                color: "white",
              }}
            />
          </div>
          <div className="reviewBtn">
            <button onClick={codeReview}>Get Review</button>
          </div>
        </div>
        <div className="right">
          <div className="review">
            {loader ? <h1>Loading...</h1> : <Markdown>{response}</Markdown>}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
