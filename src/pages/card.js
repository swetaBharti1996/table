import React from "react";
import axios from "axios";
import "./card.css";

export default class Card extends React.Component {
  state = {
    home: {},
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const home = res.data;
      this.setState({ home });
    });
  }

  deleteRow(id, e) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        const home = this.state.home.filter((item) => item.id !== id);
        this.setState({ home });
      });
  }
  getRow(id, e) {
    this.props.history.push("/postDetail");
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
                  <a href="/postDetail" class="title text-primary">
                    {home.title}
                  </a>
                  <h5 class="body-text">{home.body}</h5>
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    onClick={(e) => this.deleteRow(home.id, e)}
                  >
                    Delete
                  </button>
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
