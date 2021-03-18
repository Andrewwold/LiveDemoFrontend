import React, {Component} from 'react';
import axios from 'axios';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: {},
      slug: "",
      id: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
      this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(event) {
      event.preventDefault()
      let slug = this.state.slug
      let id = this.state.id

      axios.get(`http://localhost:4000/${slug}/${id}`).then(response => {this.setState({apiData: response.data.result.properties})
    })
    .catch(e => {console.error("Fetch error" + e)
  })
  

  }
  render() {
    return (
      <div className="app">
        <h1>Our Starwars App</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Slug</label>
          <input type="text" name="slug" value={this.state.slug} onChange={this.handleChange} />
          <label>Id</label>
          <input type="text" name="id" value={this.state.id} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
        <h1>{console.log(this.state.apiData)}</h1>
      </div>
    );
  }
}
