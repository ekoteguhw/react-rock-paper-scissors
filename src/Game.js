import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: { playerOne: null, playerTwo: null },
    };
    this.handleWeapon = this.handleWeapon.bind(this);
    this.handleWinner = this.handleWinner.bind(this);
  }

  handleWeapon() {
    let weapons = ['rock', 'paper', 'scissors'];
    this.setState({
      players: {
        playerOne: weapons[Math.floor(Math.random() * 3)],
        playerTwo: weapons[Math.floor(Math.random() * 3)],
      },
    });
  }

  handleWinner(playerOne, playerTwo) {
    if (playerOne === 'rock') {
      if (playerTwo === 'paper') {
        return 'Player Two wins with paper!';
      } else if (playerTwo === 'scissors') {
        return 'Player One wins with rock!';
      } else {
        return 'Draw! Both of you used rock.';
      }
    }

    if (playerOne === 'paper') {
      if (playerTwo === 'scissors') {
        return 'Player Two wins with scissors!';
      } else if (playerTwo === 'rock') {
        return 'Player One wins with paper!';
      } else {
        return 'Draw! Both of you used paper.';
      }
    }

    if (playerOne === 'scissors') {
      if (playerTwo === 'rock') {
        return 'Player Two wins with rock!';
      } else if (playerTwo === 'paper') {
        return 'Player One wins with scissors!';
      } else {
        return 'Draw! Both of you used scissors.';
      }
    }
  }

  render() {
    const { playerOne, playerTwo } = this.state.players;
    const winner = this.handleWinner(playerOne, playerTwo);

    return (
      <div className="game">
        <div className="game-title">
          <h2>Rock Paper Scissors's Game</h2>
        </div>
        <div className="game-content">
          {playerOne === null &&
            playerTwo === null && (
              <div className="players">
                <img
                  className="players-image"
                  src={require('./assets/img/rock-paper-scissors.png')}
                  alt="rock-paper-scissors"
                />
              </div>
            )}
          {playerOne != null &&
            playerTwo != null && (
              <div>
                <div className="player-win">{winner}</div>
                <div className="players">
                  <div className="player-one">
                    <img
                      src={require('./assets/img/' + playerOne + '.png')}
                      alt="playerOne"
                    />
                  </div>
                  <div className="player-vs">VS</div>
                  <div className="player-two">
                    <img
                      src={require('./assets/img/' + playerTwo + '.png')}
                      alt="playerTwo"
                    />
                  </div>
                </div>
              </div>
            )}
          <div className="btn-winner" onClick={this.handleWeapon}>
            Who's the Winner?
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
