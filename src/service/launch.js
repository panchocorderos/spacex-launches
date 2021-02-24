import { launchURL } from "./config";

export const getLaunch = async (id) => {
  try {
    const response = await fetch(launchURL + id);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
