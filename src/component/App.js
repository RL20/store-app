import "../style/App.css";
import React from "react";
import api from "../api/api";
import ArtistItem from "./ArtistItem";
import Create from "./Create";
class App extends React.Component {
  state = { artists: null, errorMsg: "", isLoading: false, inputVal: "" };

  componentDidMount() {
    this.getUsers();
  }

  //Create, Read, Update, Delete
  getUsers = async () => {
    try {
      let { data } = await api.get("art");
      console.log("artists", data);
      this.setState({ artists: data });
    } catch (e) {
      this.setState({ errorMsg: e.message });
    }
  };
  creatUser = async (obj) => {
    try {
      let { data } = await api.post(`art`, obj);

      this.setState((prevState) => {
        return { artists: [...prevState.artists, data] };
      });
      console.log("artistttttt", data);
    } catch (e) {
      this.setState({ errorMsg: e.message });
    }
  };
  updateUser = async (id, obj) => {
    try {
      await api.put(`art/${id}`, obj);
      let newArtists = [...this.state.artists];
      const updatedArtist = newArtists.find((arts) => arts.id === id);
      console.log("hello from sh111", obj);

      updatedArtist.name = obj.name;
      updatedArtist.image = obj.image;
      updatedArtist.code = obj.code;
      updatedArtist.price = obj.price;
      console.log("hello from sh", obj);
      this.setState({ artists: newArtists });
    } catch (e) {
      this.setState({ errorMsg: e.message });
      console.dir(e);
    }
  };
  deleteUser = async (id) => {
    try {
      await api.delete(`art/${id}`);
      let artists = this.state.artists.filter((artist) => artist.id !== id);
      this.setState({ artists });
    } catch (e) {
      this.setState({ errorMsg: e.message });
    }
  };
  inputValue = (e) => {
    this.setState({ inputVal: e.target.value });
  };
  renderUsers = () => {
    const { artists } = this.state;
    const artistList =
      artists &&
      artists.map((artist) => {
        return <ArtistItem key={artist.id} id={artist.id} name={artist.name} code={artist.code} price={artist.price} deleteArtist={this.deleteUser} updateArtist={this.updateUser} />;
      });
    return (
      <div>
        <Create text="test" parentCallBack={this.creatUser} />
        {artistList}
      </div>
    );
  };
  render() {
    return <div>{this.renderUsers()}</div>;
  }
}

export default App;
