import React, { useEffect } from "react";
import { useLaunch } from "../hooks/useLaunches";
import { getTime, getDate } from "../service/date";

export const LaunchDetails = ({ match }) => {
  const flightNumber = match.params.id;
  const { launch } = useLaunch(flightNumber);

  useEffect(() => {
    console.log(launch);
  }, [launch]);
  return (
    <div>
      {launch ? (
        <div className="container-detail-card">
          <div className="detail-launch-card">
            <div className="detail-img">
              <img
                src={launch.links?.mission_patch_small}
                alt={launch.name + " patch"}
                className="patch-img"
              />
            </div>
            <div className="detail-info">
              <p><b>Mission name:</b> {launch.mission_name}</p>
              <p><b>Launch details:</b> {launch.details}</p>
              <p><b>Launch date:</b> {getDate(launch.launch_date_utc)}</p>
              <p><b>Launch time:</b> {getTime(launch.launch_date_utc)}</p>
              <p><b>Rocket name:</b> {launch.rocket?.rocket_name}</p>
              <p><b>Rocket type:</b> {launch.rocket?.rocket_type}</p>
              <p><a target="#" href={launch.links?.article_link}>Go to article</a></p>
            </div>

          </div>

        </div>
      ) : (
        <div>
          <p>Cargando</p>
        </div>
      )}
    </div>
  );
};
