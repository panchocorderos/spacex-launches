import React from "react";
import { Link } from 'react-router-dom';
import { getDate, getTime} from '../service/date'

export const Launch = (props) => {
  const { launch } = props;  
  const rocket = "🚀";
  
  return (
    <div className="launch-card">
      <div className="launch-path">
        <img
          src={launch.links.patch.small}
          alt={launch.name + " patch"}
          className="patch-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <Link to={`/launches/${launch.flight_number}`}>
            {`${rocket} ${launch.name}`}
          </Link>
        </div>
        <div className="card-description">
          {launch.details ? (
            <p>
              <b>Details: </b> {launch.details}
            </p>
          ) : (
            <p>
              <b>Details: </b> None
            </p>
          )}
          <p>
            <b>Launch date:</b>
            {" " + getDate(launch.date_utc)}
          </p>
          <p>
            <b>Launch time:</b> {getTime(launch.date_utc)}
          </p>
          <div className="launch-link-container">
            <a href={launch.links.webcast} target="#">
              Go to video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
