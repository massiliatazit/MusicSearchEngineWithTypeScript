import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {BsMusicNote} from 'react-icons/bs';

interface State {
  info: object;
  topTracks: object[];
  albumTracks: object[];
}

class DetailPage extends Component<RouteComponentProps, State> {
  state = {
    info: {
      title: "string",
      release_date: "string",
      rank: 0,
      explicit_lyrics: false,
      duration: 0,
      artist: {
        name: "string",
        picture_xl: "string",
        id: 0,
      },
      album: {
        cover_xl: "string",
        title: "string",
        release_date: "string",
        id: 0,
      },
    },
    topTracks: [],
    albumTracks: [
      {
        title: "",
        duration: 0,
        id: 0,
      },
    ],
  };

  componentDidMount = async () => {
    await this.fetchSong();
    this.fetchTopSongs();
    this.fetchAlbum();
  };

  fetchSong = async () => {
    try {
      let params: { id?: number } = this.props.match.params;
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/track/${params.id}`,
        {
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResp = await response.json();

      this.setState({ info: parsedResp });
      console.log(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  fetchTopSongs = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/artist/${this.state.info.artist.id}/top?limit=10`,
        {
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResp = await response.json();

      this.setState({ topTracks: parsedResp.data });
      console.log(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  fetchAlbum = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/album/${this.state.info.album.id}/tracks`,
        {
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResp = await response.json();

      this.setState({ albumTracks: parsedResp.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container id="detail-page" className="mt-5">
        <div className="song-details">
      <div className="back-link">
        <a href="/#" onClick={() => this.props.history.push("/" )}>
          &lt;&lt; Back to results
        </a>
      </div>
      <div>
      {this.state.info.title}/ {this.state.info.artist.name}
      </div>
      <div className="main-section">
        <div className="left-section">
          <div className="title">{this.state.info.album.title}</div>
          <hr />
          <h5>
                  Ranked: {this.state.info.rank} • Released:{" "}
                  {this.state.info.release_date}{" "}
                  {this.state.info.explicit_lyrics && "• EXPLICIT"}
                </h5>
        </div>
        <div className="right-section">
          <div className="company-details">
            <h3>About Album</h3>
            <img
                  alt="artist"
                  className=" albumImage"
                  src={this.state.info.album.cover_xl}
                />
            <div className="company-name">{this.state.info.album.title}</div>
           
          </div>
        </div>
      </div>
      
                <ListGroup variant="flush" id="tracklistRight">
                  {this.state.albumTracks.length > 0 &&
                    this.state.albumTracks.map((track, index) => (
                      <ListGroup.Item
                        key={index}
                        className="trackListing d-flex justify-content-between"
                      >
                        <span className="trackName">{track.title}</span> <BsMusicNote className="mr-2"/>
                        <span className="trackLength">{((track.duration % 60) / 10).toFixed(2)}</span>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
    </div>
  
              {/* <Col xs={12}>
                <h6>Tracklist:</h6>
                <ListGroup variant="flush" id="tracklistRight">
                  {this.state.albumTracks.length > 0 &&
                    this.state.albumTracks.map((track, index) => (
                      <ListGroup.Item
                        key={index}
                        className="trackListing d-flex justify-content-between"
                      >
                        <span className="trackName">{track.title}</span>
                        <span className="trackLength">{track.duration}</span>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default DetailPage;