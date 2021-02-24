import { useCallback, useEffect, useState } from "react";
import { getLaunch } from "../service/launch";
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

const useLaunch = (flight_number) => {
  const [launch, setLaunch] = useState({});
  const getLaunchCallback = useCallback(async () => {
    const data = await getLaunch(flight_number);
    setLaunch(data);
  }, [flight_number]);

  useEffect(() => {
    getLaunchCallback();
  }, [getLaunchCallback]);

  return { launch };
};

const useLaunches = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [launchesStore, setLaunchesStore] = useState([]);
  const { pages, maxPages } = splitLaunchesOnPages(launches);

  const getLaunchesCallback = useCallback(async () => {
    setLoading(true);
    const data = await getLaunches();
    setLaunches(data);
    setLaunchesStore(data);
    setLoading(false);
    
  }, []);

  useEffect(() => {
    getLaunchesCallback();
  }, [getLaunchesCallback]);

  const nextPage = () => {
    const nextPage = Math.min(currentPage + 1, maxPages - 1);
    setCurrentPage(nextPage);
  };

  const previousPage = () => {
    const previousPage = Math.max(currentPage - 1, 0);
    setCurrentPage(previousPage);
  };

  const onSearch = (launchName = "") => {
    if (launchName === "") {
      setLaunches(launchesStore);
    } else {
      const result = launches.filter((launch) =>
        launch.name?.toUpperCase().includes(launchName?.toUpperCase())
      );
      setLaunches(result);
    }
    setCurrentPage(0);
  };

  return {
    launches,
    pages,
    maxPages,
    onSearch,
    nextPage,
    previousPage,
    currentPage,
    loading,
  };
};

export { 
  useLaunches,
  useLaunch
};
