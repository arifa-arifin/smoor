import React from "react";
import "./App.css";
import { Carousel } from "react-bootstrap";

class RestController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch(
      "http://api.gitodemos.com/v1/home/banner?client_id=25&client_secret=Yqk5mrGzy5S0fHSCigCm90lrL2AIBGk0Roc6lnzw",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          users: json.data
        });
      });
  }

  sendData(e) {
    e.preventDefault();
    fetch("http://demo-api.gitodemos.com/v1/subscribe", {
      method: "POST",
      body: JSON.stringify({
        client_id: 21,
        client_secret: "2pCsYG5vVbK7a4MAKnP6nfbNpXHpJxJXGZaNDSvK",
        email: "dileep.dv@costprize.com",
        name: "test"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          food: json
        });
      });
  }

  render() {
    if (this.state.users.length) {
      var userList = this.state.users.map(user => {
        return (
          <Carousel.Item key={user.links.image}>
            <img
              className="d-block w-100"
              src={user.links.image}
              alt="food_image"
            />
            <Carousel.Caption>
              <button className="btn btn-danger px-2">Shop Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }
    return (
      <div>
        <Carousel>{userList}</Carousel>
        <div className="text-centre">
				<button
          className="btn btn-danger text-center px-2 mt-2 mx-auto"
          onClick={e => this.sendData(e)}>
          Subscribe now
        </button>
				</div>
      </div>
    );
  }
}

export default RestController;
