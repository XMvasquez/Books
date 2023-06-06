import React, { Component } from 'react';
import kafkaService from '../services/kafka.service';
import axios from 'axios';


class Reactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
        likeCount: 0,
        loveCount: 0,
        laughCount: 0,
        cryCount: 0,
        wowCount: 0,
        angryCount: 0
    };
  }

  componentDidMount() {
    this.fetchReactions();
  }

  fetchReactions = async () => {
    try {
      
      const id = this.props.id;
      console.log("try ",id);
      const uri = "https://mongoapi-service-xmvasquez.cloud.okteto.net/api/reactions";
      const responseLike = await axios.get(`${uri}/${id}/like`);
      const likeCount = responseLike.data ? responseLike.data.n : 0;
      const responseLove = await axios.get(`${uri}/${id}/love`);
      const loveCount = responseLove.data ? responseLove.data.n : 0;
      const responseLaugh = await axios.get(`${uri}/${id}/laugh`);
      const laughCount = responseLaugh.data ? responseLaugh.data.n : 0;
      const responseSad = await axios.get(`${uri}/${id}/cry`);
      const sadCount = responseSad.data ? responseSad.data.n : 0;
      const responseWow = await axios.get(`${uri}/${id}/wow`);
      const wowCount = responseWow.data ? responseWow.data.n : 0;
      const responseAngry = await axios.get(`${uri}/${id}/angry`);
      const angryCount = responseAngry.data ? responseAngry.data.n : 0;

      this.setState({
        likes: {
          like: likeCount,
          love: loveCount,
          laugh: laughCount,
          cry: sadCount,
          wow: wowCount,
          angry: angryCount
        }
      });
    } catch (error) {
      console.log('Error al obtener las reacciones:', error);
    }
  };

  saveLike(e, status, reactions) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    kafkaService.reaction(this.props.email ,this.props.id,reactions);
    e.preventDefault();
}
  

  handleLikeClick = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  handleLoveClick = () => {
    this.setState({ loveCount: this.state.loveCount + 1 });
  };

  handleLaughClick = () => {
    this.setState({ laughCount: this.state.laughCount + 1 });
  };

  handleCryClick = () => {
    this.setState({ cryCount: this.state.cryCount + 1 });
  };

  handleWowClick = () => {
    this.setState({ wowCount: this.state.wowCount + 1 });
  };

  handleAngryClick = () => {
    this.setState({ angryCount: this.state.angryCount + 1 });
  };

  render() {
    const { likeCount, loveCount, laughCount, cryCount , wowCount, angryCount} = this.state;

    return (
      <div className="reactions">
        <button className='reaccion' onClick={(e) => {
          this.handleLikeClick();
          e.preventDefault();
          this.saveLike(e, 1,"like");
        }}>
          <span role="img" aria-label="like">
            👍
          </span>
          <span className="count">{likeCount}</span>
        </button>
        <button className='reaccion' onClick={(e) => {
          this.handleLoveClick();
          e.preventDefault();
          this.saveLike(e, 1,"love");
        }}>
          <span role="img" aria-label="love">
            ❤️
          </span>
          <span className="count">{loveCount}</span>
        </button>
        <button className='reaccion' onClick={(e) => {
          this.handleLaughClick();
          e.preventDefault();
          this.saveLike(e, 1, "laugh");
        }}>
          <span role="img" aria-label="laugh">
            😂
          </span>
          <span className="count">{laughCount}</span>
        </button>
        <button className='reaccion' onClick={(e) => {
          this.handleCryClick();
          e.preventDefault();
          this.saveLike(e, 1, "cry");
        }}>
          <span role="img" aria-label="cry">
            😢
          </span>
          <span className="count">{cryCount}</span>
        </button>
        <button className='reaccion' onClick={(e) => {
          this.handleWowClick();
          e.preventDefault();
          this.saveLike(e, 1, "wow");
        }}>
          <span role="img" aria-label="wow">
            😮
          </span>
          <span className="count">{wowCount}</span>
        </button>
        <button className='reaccion' onClick={(e) => {
          this.handleAngryClick();
          e.preventDefault();
          this.saveLike(e, 1, "angry");
        }}>
          <span role="img" aria-label="angry">
            😠
          </span>
          <span className="count">{angryCount}</span>
        </button>
      </div>
    );
  }
}

export default Reactions;