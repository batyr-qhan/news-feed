import React from "react";
import "./styles.css";
import Lorem from "react-lorem-component";
import NewsCard from "./components/NewsCard/NewsCard";

export default function App() {
  const data = [
    {
      id: 1,
      title: "Black Friday",
      desc: <Lorem count="1" />,
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/121A2/production/_111764147_breaking_news_bigger-nc.png",
      tags: [
        {
          text: "new",
          color: "orange"
        }
      ]
    },
    {
      id: 2,
      title: "Good News",
      desc: <Lorem count="1" />,
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/121A2/production/_111764147_breaking_news_bigger-nc.png",
      tags: [
        {
          text: "popular",
          color: "purple"
        }
      ]
    },
    {
      id: 3,
      title: "Politics",
      desc: <Lorem count="1" />,
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/121A2/production/_111764147_breaking_news_bigger-nc.png",
      tags: [
        {
          text: "old",
          color: "chocolate"
        },
        {
          text: "sport",
          color: "cyan"
        }
      ]
    }
  ];

  return (
    <div className="news">
      <img
        src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/121A2/production/_111764147_breaking_news_bigger-nc.png"
        alt="news banner"
        className="news__banner"
      />
      <div className="news__container">
        {data.map(props => (
          <NewsCard key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}
