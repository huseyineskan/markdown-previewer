import { useState } from "react";
import Markdown from "react-markdown";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState(
    `# Markdown Previewer(h1) \n## Sub-heading(h2) \n[Link](https://www.heskan.com) \n**bold text** \n*italic text* \n>👆Block Quotes! \n- list item 1 \n- list item 2 \n- list item 3 \n\n \`\`\` \n//⚠️this is multi-line code block: \nfunction anotherExample(firstLine, lastLine) { \n  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') { \n      return multiLineCode; \n   } \n } \n \`\`\` \n \ninline code: \`<div></div>\`
    \n![Heskan Logo w/ Text](https://heskan.com/wp-content/uploads/2021/12/heskan-1-1.png)👈
    `
  );

  function updatePreview(event) {
    setInputText(event.target.value);
  }

  return (
    <>
      <div>
        <p style={{ textAlign: "center" }}>Welcome to Markdown Previewer</p>
        <div className="container">
          <textarea
            name="editor"
            id="editor"
            onChange={updatePreview}
            value={inputText}
          ></textarea>
          <div id="preview">
            <Markdown>{inputText}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
