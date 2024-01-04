import { useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";

const Block = styled.div`
  background-color: #5099f3;
  height: ${(props) => props.$blockHeight}px;
  width: ${(props) => props.$blockWidht}px;
  border-top-left-radius: ${(props) => props.$topleft || 0}px;
  border-bottom-left-radius: ${(props) => props.$bottomleft || 0}px;
  border-top-right-radius: ${(props) => props.$topright || 0}px;
  border-bottom-right-radius: ${(props) => props.$bottomright || 0}px;
  transition: all 0.3s ease;
`;

const blockSize = {
  height: window.innerWidth > 425 ? 300 : 150,
  width:
    window.innerWidth > 1024
      ? 600
      : window.innerWidth > 768
      ? 450
      : window.innerWidth > 425
      ? 395
      : 290,
};

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [blockWidth, setBlockWidth] = useState(blockSize.width);
  const [blockHeight, setBlockHeight] = useState(blockSize.height);

  const [message, setMessage] = useState("");
  const [messageShowed, setMessageShowed] = useState(false);

  const borderRadiusValuesEl = useRef();

  const handleOnClick = () => {
    setMessageShowed(true);
    setTimeout(() => {
      setMessageShowed(false);
    }, 1500);
    setMessage("Copied to clipboard");
    navigator.clipboard.writeText(borderRadiusValuesEl.current.textContent);
  };

  return (
    <div className="wrapper">
      <h1 className="title">border-radius generator</h1>
      <div className="block-size">
        <div className="height">
          <span>height:</span>
          <input
            type="number"
            value={blockHeight}
            onChange={(e) => setBlockHeight(e.target.value)}
          />
        </div>
        <div className="width">
          <span>width:</span>
          <input
            type="number"
            value={blockWidth}
            onChange={(e) => setBlockWidth(e.target.value)}
          />
        </div>
      </div>
      <div className="users-input">
        <div className="left">
          <div className="value-wrapper">
            <label htmlFor="top-left">top-left:</label>
            <input
              type="number"
              className="value top-left"
              name="top-left"
              value={topLeft}
              onChange={(e) => setTopLeft(e.target.value)}
              onClick={(e) => e.target.select()}
            />
          </div>
          <div className="value-wrapper">
            <label htmlFor="bottom-left">bottom-left:</label>
            <input
              type="number"
              className="value bottom-left"
              name="bottom-left"
              value={bottomLeft}
              onChange={(e) => setBottomLeft(e.target.value)}
              onClick={(e) => e.target.select()}
            />
          </div>
        </div>
        <div className="block">
          <Block
            $topleft={topLeft}
            $bottomleft={bottomLeft}
            $topright={topRight}
            $bottomright={bottomRight}
            $blockWidht={blockWidth}
            $blockHeight={blockHeight}
          />
        </div>
        <div className="right">
          <div className="value-wrapper">
            <label htmlFor="top-right">top-right:</label>
            <input
              type="number"
              className="value top-right"
              name="top-right"
              value={topRight}
              onChange={(e) => setTopRight(e.target.value)}
              onClick={(e) => e.target.select()}
            />
          </div>
          <div className="value-wrapper">
            <label htmlFor="bottom-right">bottom-right:</label>
            <input
              type="number"
              className="value bottom-right"
              name="bottom-right"
              value={bottomRight}
              onChange={(e) => setBottomRight(e.target.value)}
              onClick={(e) => e.target.select()}
            />
          </div>
        </div>
      </div>
      <div className="total-result">
        <span>border-radius:</span>
        <div className="total-result-wrapper">
          <div className="copy-border-value">
            <span className="border-value" ref={borderRadiusValuesEl}>
              {topLeft || 0}px {bottomLeft || 0}px {topRight || 0}px{" "}
              {bottomRight || 0}px
            </span>
            <button className="copy-button" onClick={handleOnClick}>
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className={`copied-message ${messageShowed ? "showed" : ""}`}>
        {message}&#128077;
      </div>
    </div>
  );
}

export default App;
