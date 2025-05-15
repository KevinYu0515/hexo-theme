// scripts/notes-generator.js
const pagination = require("hexo-pagination");


hexo.extend.generator.register("notes", function (locals) {
  const notes = locals.posts
    .filter((post) => post.source.startsWith("_posts/notes/"))
    .sort("-date");

  return pagination("/notes/", notes, {
    perPage: hexo.config.per_page || 10,
    layout: ["notes"],
    format: "/page/%d/",
    data: {
      base: "notes",
      title: "Notes",
    },
  });
});
