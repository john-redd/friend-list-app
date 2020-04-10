import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      almostReady: false,
      friends: [],
      name: "",
      age: 0,
      hobby: "",
    };
  }

  handleChange() {}

  addFriend() {
    // axios.post()
  }

  updateFriend() {
    // axios.put()
  }

  deleteFriend() {
    // axios.delete()
  }

  componentDidMount() {
    axios
      .get("/api/friends")
      .then((res) => {
        this.setState({ loading: false, almostReady: true });
        // this.setState({ friends: res.data, almostReady: false })
        setTimeout(
          () => this.setState({ friends: res.data, almostReady: false }),
          5 * 1000
        );
      })
      .catch((err) => console.log(err));
  }

  render() {
    const friendsNames = this.state.friends.map((friend) => (
      <div>
        <h1>{friend.name}</h1>
        <h1>{friend.age}</h1>
        <h1>{friend.hobby}</h1>
      </div>
    ));

    return <div className="App">{friendsNames}</div>;
  }
}

export default App;
