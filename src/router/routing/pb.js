const modules = import.meta.glob("@/pb/*.vue", { import: "default" });

export default Object.keys(modules).map((path) => {
  const templateName = path.match(/\b(?!src|pb|vue|\.|\/).+?\b/g).join("");

  return {
    path: "/pb/" + templateName,
    component: modules[path],
  };
});
