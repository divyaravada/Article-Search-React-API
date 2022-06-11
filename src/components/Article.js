import React from "react";

import { Link } from "react-router-dom";

const API_KEY = "CpveeaLyggF34PU7nIyCmSx59BNWGi8L";

class Article extends React.Component {
  state = {
    activeArticle: [],
  };
  componentDidMount = async () => {
    const title = this.props.location.state.article;
    const req = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    this.setState({ activeArticle: res.response.docs[0] });
    console.log(this.state.activeArticle);
  };
  render() {
    const article = this.state.activeArticle;
    return (
      <div>
        <div className="appAlignment">
          <Link to="/">Go to results page</Link>

          <div key={article.id}>
            <h5 className="fw-bold pt-3">{article.abstract}</h5>
            <p className="pt-2">{article.pub_date}</p>
            <p className="pt-2.5">{article.lead_paragraph}</p>
            <a className="pt-5" href={article.web_url}>
              Read the Full article
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
