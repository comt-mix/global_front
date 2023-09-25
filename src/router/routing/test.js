const modules = import.meta.glob("@/views/Test/*.vue", { import: "default" });

export default Object.keys(modules).map((path) => {
  const templateName = path.match(/\b(?!src|views|Test|vue|\.|\/).+?\b/g).join("");
  return {
    path: "/test/" + templateName,
    component: modules[path],
  };
});
