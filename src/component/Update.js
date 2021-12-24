import React from "react";
class Update extends React.Component {
  constructor(props) {
    super(props);
    const { name, image, code, price } = this.props.artistObj;
    console.log("prpppppppppppppppp", this.props);
    this.state = { name, image, code, price };
  }
  inputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  confirm = (e) => {
    e.preventDefault();
    const { name, image, code, price } = this.state;
    const Obj = { name, image, code, price };
    // this.props.parentCallBack(Obj);
    this.props.parentCallBack(this.props.id, Obj);
    this.setState({ name: "", image: "", code: "", price: "" });
  };

  render() {
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
            Update Item
          </button>
        </form>
      </div>
    );
  }
}

export default Update;
