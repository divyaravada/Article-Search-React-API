import React, { Component } from "react";
import "./App.css";
import Articles from "./components/Articles";
import Form from "./components/Form";

const API_KEY = "CpveeaLyggF34PU7nIyCmSx59BNWGi8L";
class App extends Component {
  state = {
    articles: [],
  };
  getArticle = async (e, query, page = 0) => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${query}&page=${page}&count=5`
    );
    const data = await api_call.json();
    const Response = data.response;
    this.setState({ articles: Response.docs });
  };
  render() {
    return (
      <div>
        <div className="appAlignment">
          <h6 className="text-start">Type search query term in here:</h6>
          <Form
            disablePagination={!!this.state.articles.length}
            getArticle={this.getArticle}
          />
          <h6>Results</h6>
          <Articles articles={this.state.articles} />
        </div>
      </div>
    );
  }
}

export default App;
