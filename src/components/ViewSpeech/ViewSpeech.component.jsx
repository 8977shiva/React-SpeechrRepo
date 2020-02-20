import React from "react";
import "./ViewSpeech.style.css";

class ViewSpeech extends React.Component {
 
  render() {
    return (
      <div className="viewBody">
        <ul>
          {this.props.list.map(m => (
            <li key={m.Date}>{m.Author}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ViewSpeech;
