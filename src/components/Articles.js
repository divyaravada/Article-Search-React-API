import React from "react";
import { Link } from "react-router-dom";

const Articles = (props) => (
  <ul className="list-group mb-4">
    {props.articles.map((article) => {
      console.log(article);
      return (
        <div key={article._id}>
          <Link
            to={{
              pathname: `/article/${article._id}`,
              state: { article: article.headline.main },
            }}
            key={article._id}
            className="list-group-item"
          >
            <h6>
              {article.headline.main.length < 150
                ? `${article.headline.main}`
                : `${article.headline.main.substring(0, 165)}...`}
            </h6>
          </Link>
        </div>
      );
    })}
  </ul>
);

export default Articles;
