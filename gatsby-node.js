exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "https://qhacks.ca/*",
    toPath: "https://qhacks.io/:splat",
    isPermanent: true,
    force: true
  });
  createRedirect({
    fromPath: "https://qhacks-website.netlify.com/*",
    toPath: "https://qhacks.io/:splat",
    isPermanent: true,
    force: true
  });
};
