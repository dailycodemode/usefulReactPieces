import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './_1_CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment='Comment 1' avatarIcon={faker.image.avatar()}/>
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" comment='Comment 2' avatarIcon={faker.image.avatar()}/>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" comment='Comment 3' avatarIcon={faker.image.avatar()}/>
    </div>
  );
};

// #################################################################################################################
// class App extends React.Component {
//   state = { lat: null, errorMessage: '' };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({ lat: position.coords.latitude }),
//       err => this.setState({ errorMessage: err.message })
//     );
//   }

//   // React says we have to define render!!
//   render() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>;
//     }

//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat}/>;
//     }

//     return <div>Loading!</div>;
//   }
// }

// #################################################################################################################
// class App extends React.Component {
//   state ={images: []};

//   onSearchSubmt = async (term) => {
//     console.log(term);
//     const response = await unsplash.get('/search/photos', {
//       params: { query: term}

//     })

//     this.setState({images: response.data.results})
//     ;
//   }
//   render(){
//     return (
//       <div className="ui container" style={{ marginTop: '10px' }}>
//         <SearchBar onSubmit={this.onSearchSubmt}/>
//         Found: {this.state.images.length} images
//         <ImageList images={this.state.images}/>
//       </div>
//     );
//   }
// };

ReactDOM.render(<App />, document.querySelector('#root'));
