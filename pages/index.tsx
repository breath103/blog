import { NextPage } from 'next';

import * as activitiesJSON from "./activities.json";

const Home: NextPage<{}> = ({}) => {
  console.log({ activitiesJSON });
  const activities = (activitiesJSON as any).default as Array<{
    date: string;
    title: string;
    content: Array<{
      type: "webpage" | "github" |"youtube",
      url: string
    }>
  }>;
  return (
    <>
      <h1>Activities</h1>
      <ul>
        {activities.map((activity, index) => {
          return <li key={index}>
            <h3>{activity.date}</h3>
            <h3>{activity.title}</h3>
            <div>
              {activity.content.map((content, index) => {
                switch (content.type) {
                  default:
                    return <div><a href={content.url}>{content.url}</a></div>;
                }
              })}
            </div>
          </li>
        })}
      </ul>
    </>
  );
}

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = (req && req.headers['user-agent']) || navigator.userAgent;
//   return { userAgent };
// };

export default Home;
