import ReactGA from "react-ga";

export const FeatureRequest = (feature: string) => {
  ReactGA.event({
    category: "Feature",
    action: "Request",
    label: feature,
  });
};
