import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
export class Details extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       loading: true,
  //     };
  //   }
  //* After using class properties
  state = { loading: true };
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    // throw new Error("kak");
    if (this.state.loading) {
      return <h2>loading ....</h2>;
    }
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          {/* how to consume context in class component */}
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          {/* how to consume context in class component */}
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
//*class component doesn't support useParams hook so we made this trick
const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};
export default WrappedDetails;
