import React from "react";
import "../style/Create.css";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", image: "", code: "", price: "", show: false };
  }

  inputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  confirm = (e) => {
    e.preventDefault();
    const { name, image, code, price } = this.state;
    const Obj = { name, image, code, price };
    this.props.parentCallBack(Obj);
    this.setState({ name: "", image: "", code: "", price: "" });
    this.setShow();
  };
  setShow = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };
  render() {
    if (this.state.show !== true)
      return (
        <button className="btn" onClick={this.setShow}>
          Add Item
        </button>
      );
    return (
      <div>
        <form onSubmit={this.confirm} className="create-form" action="">
          <label htmlFor="name">Artist name</label>
          <input value={this.state.name} onChange={this.inputValue} name="name" id="name" type="text" />

          <label htmlFor="link">Image Link</label>
          <input value={this.state.image} onChange={this.inputValue} name="image" id="link" type="text" />

          <label htmlFor="code">Item code</label>
          <input value={this.state.code} onChange={this.inputValue} name="code" id="code" type="text" />

          <label htmlFor="price">Price</label>
          <input value={this.state.price} onChange={this.inputValue} name="price" id="price" type="text" />
          <button className="btn" type="submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
