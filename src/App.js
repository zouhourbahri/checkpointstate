import React from "react";
import photo from './components/image/photo.png'
import Person from './components/person'



class App extends React.Component {
  state = {
    Person: {
      fullName: "BAHRI Zouhour",
      bio: "Mecatronic engineer, interested in web development",
      imgSrc: photo,
      profession: "Software developer"
    },
    booleanShow: true,
    count: 0
  };

  changeShow() {
    this.setState({ booleanShow: !this.state.booleanShow })
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  };
  render() {
    return (
      <div>
        <Person state={this.state} changeShow={this.changeShow.bind(this)} />
        <h1>
          {this.state.count}
        </h1>
      </div>
    );
  }

}
export default App;
