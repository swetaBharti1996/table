import React from "react";
import axios from "axios";
import "./card.css";

export default class postDetail extends React.Component {
  state = {
    home: {},
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const home = res.data;
      this.setState({ home });
    });
  }

  render() {
    const { home } = this.state;

    return (
      <div className="wrapper-desktop" style={{ backgroundColor: "white" }}>
        {/* ***************************CARD START******************** */}

        {home.length > 0 ? (
          home.map((home, index) => {
            return (
              <div className="card card-desktop  mt-3">
                <div className="card-body ">
                  <a href="{}" class="card-link">
                    {home.id}
                  </a>
                  <br />
                  <h6 class="title text-primary">{home.title}</h6>
                  <h5 class="body-text">{home.body}</h5>
                </div>
              </div>
            );
          })
        ) : (
          <h5 colSpan="5">Loading...</h5>
        )}
      </div>
    );
  }
}
