import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }
  render() {
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            className={`ColorBox-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`ColorBox-copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="ColorBox-copy">
            <div className="ColorBox-content">
              <span>{name}</span>
            </div>
            <button className="ColorBox-copy-btn">Copy</button>
          </div>
          <span className="ColorBox-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
