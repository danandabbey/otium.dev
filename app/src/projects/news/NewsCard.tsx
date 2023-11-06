import React from "react";
import { useStyleContext } from "../../components/Context";

function NewsCard(props): React.Component {
  const { webUrl, webTitle } = props;
  const style = useStyleContext();
  return (
    <div style={style.newsCard}>
      <div style={style.newsText}>
        <a style={style.link} href={webUrl}>
          <h1 style={style.newsHeadline}> {webTitle} </h1>
        </a>
      </div>
    </div>
  );
}

export default NewsCard;

/*
result object:
  {
    id: 'world/2023/nov/05/ceasefire-or-humanitarian-pause-the-bitter-debate-on-the-best-route-to-peace',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-11-05T19:12:15Z',
    webTitle: 'Most agree Gaza needs help – but there’s fierce disagreement on how to deliver it',
    webUrl: 'https://www.theguardian.com/world/2023/nov/05/ceasefire-or-humanitarian-pause-the-bitter-debate-on-the-best-route-to-peace',
    apiUrl: 'https://content.guardianapis.com/world/2023/nov/05/ceasefire-or-humanitarian-pause-the-bitter-debate-on-the-best-route-to-peace',
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News'
  },
*/
