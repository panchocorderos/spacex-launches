import React from "react";

export const Launch = (props) => {
  const { launch } = props;
  const moment = require("moment");
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
          <h2> {`${rocket} ${launch.name}`} </h2>
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
            <b>Launch date:</b>{" "}
            {moment.utc(launch.date_utc).format("DD/MM/YYYY")}
          </p>
          <p>
            <b>Launch time:</b> {moment.utc(launch.date_utc).format("hh:mm A")}
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
