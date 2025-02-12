import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [code, setCode] = useState("function fetchData() {}");
  const [response, setResponse] = useState("");
  useEffect(() => {
    prism.highlightAll();
  });
  const codeReview = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/get-review",
        {
          code,
        }
      );
      setResponse(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            {/* <pre>
              <code className="language-javascript">
                {`function fetchData() {}`}
              </code>
            </pre> */}
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
          <div className="review"></div>
        </div>
      </main>
    </>
  );
}

export default App;
