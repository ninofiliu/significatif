export const ROUTER_BASE = "/";
export const STATIC_BASE =
  location.hostname === "significatif.org"
    ? "https://storage.googleapis.com/significatif/"
    : `http://${location.hostname}:3001/`;
