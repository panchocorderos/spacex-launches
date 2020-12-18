import { useCallback, useEffect, useState } from "react";

import { getLaunches } from "../service/launches";

const splitLaunchesOnPages = (launches) => {
  const pages = [];
  const toSplitLaunches = launches;
  for (let i = 0; i < toSplitLaunches.length; i += 15) {
    const res = toSplitLaunches.slice(i, i + 15);
    pages.push(res);
  }
  return { pages, maxPages: pages.length };
};

const useLaunches = () => {
  const [launches, setLaunches] = useState([]);
  const { pages, maxPages } = splitLaunchesOnPages(launches);

  const getLaunchesCallback = useCallback(async () => {
    const data = await getLaunches();
    setLaunches(data);
  }, []);

  useEffect(() => {
    getLaunchesCallback();
  }, [getLaunchesCallback]);

  return {
    launches,
    pages,
    maxPages,
  };
};

export default useLaunches;
