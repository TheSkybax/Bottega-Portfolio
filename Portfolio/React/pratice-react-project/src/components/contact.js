import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Join Calvin's Official Discord Below</h1>
        <iframe
          src="https://discord.com/widget?id=813204386695610400&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    );
  }
}
