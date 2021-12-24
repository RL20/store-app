import React from "react";
import Update from "./Update";

class ArtistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  handelDelete = (id) => {
    this.props.deleteArtist(id);
  };
  handelUpdate = (id, obj) => {
    this.props.updateArtist(id, obj);
    this.setShow();
  };

  setShow = () => {
    this.setState((prevState) => {
      console.log("knjnjjjnjnjnbjnjhbjhb");
      return { show: !prevState.show };
    });
  };

  render() {
    const { id, name, code, price } = this.props;
    if (this.state.show) return <Update parentCallBack={this.handelUpdate} id={id} artistObj={{ id, name, code, price }} />;
    return (
      <div style={{ border: "3px solid red", margin: "5px", width: "250px" }}>
        <h3>{`Artist: ${name}`}</h3>
        <img style={{ width: "200px", height: "200px" }} src={`https://picsum.photos/500/500?random=${id}`} alt="" />
        <h3>{`Item number:${code}`}</h3>
        {/* <h3>{`Item number:${code.substring(0, 6)}`}</h3> */}
        <h4>{`Image price: ${price}`}&euro;</h4>
        {/* 
        <input onChange={this.inputValue} type="text" />
        <button onClick={() => this.updateArtists(id, { name: inputVal })}>Update</button> */}
        <button onClick={() => this.handelDelete(id)}>Delete</button>
        <button onClick={this.setShow}>Update</button>
      </div>
    );
  }
}

export default ArtistItem;
