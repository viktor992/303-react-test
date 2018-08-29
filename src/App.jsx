import React, { Component } from 'react';
import axios from 'axios';
import Article from './components/article/Article';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.getServerData();
  }

  async getServerData() {
    try {
      const data = await axios.get('https://thewirecutter.com/wp-json/wp/v2/posts');
      this.setState({
        data: data.data,
        loading: false,
      });
    } catch (e) {
      this.setState({
        data: null,
        error: true,
        loading: false,
      });
    }
  }

  render() {
    const { data, error, loading } = this.state;

    return (
      <div className="container">
        <h1> Articles </h1>
        { loading && <p> Loading... </p>}
        { !loading && !error && (
        <div className="row">
          { data.map(x => <Article key={x.id} data={x} />) }
        </div>
        ) }
        { !loading && error && <p> Error! </p> }
      </div>
    );
  }
}

export default App;
