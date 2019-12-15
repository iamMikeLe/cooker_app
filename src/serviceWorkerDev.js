/* eslint-disable no-console */
export default function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}sw.js`)
      .then((register) => console.log("worked", register))
      .catch((err) => console.log("Error", err));
  }
}
