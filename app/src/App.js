import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  constructor () {
    super()
    this.state = {
      score: 0,
      prevScore: 0,
      friends: friends
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <div className="Container">
      <h1>Clicky Game</h1>
      <div>{this.state.score} | {this.state.prevScore}</div>
      <div className="jumbotron">
        <h2>Click on an image and earn a point, but dont click the same image or GAME OVER</h2>
      </div>
      <div>
        {this.state.friends.map((friend, index) => (
          <FriendCard key={index}
            image={friend.image}
            index={index}
            handleClick={(index) => {
              this.handleClick(index);
            }}
          />
        ))}
        </div>
        </div>
      </Wrapper>
    );
  }

  shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  handleClick (index) {
    let {friends, score, prevScore} = this.state;



    if(!friends[index].clicked) {
      friends[index].clicked = true;
      score++;
    } else {
      friends = friends.map((friend, index) => {
        friend.clicked = false;
        return friend;
      });
      prevScore = score > prevScore ? score : prevScore;
      score = 0;
    }

    friends = this.shuffle(friends)

    this.setState({
      friends, score, prevScore
    })

  }
}

export default App;
