const programLanguages = [
  "javascript",
  "typescript",
  "python",
  "ruby",
  "java",
  "c",
  "c++",
  "c#",
  "go",
  "swift",
  "php",
  "kotlin",
  "scala",
  "perl",
  "r",
  "bash",
  "lua",
  "rust",
  "erlang",
  "elixir",
  "haskell",
  "clojure",
  "clojurescript",
  "coffeescript",
  "crystal",
  "dart",
  "elm",
  "fsharp",
  "groovy",
  "haxe",
];

const randomProgramLanguage = () => {
  const language = programLanguages[Math.floor(Math.random() * programLanguages.length)];
  console.log(language);
};

module.exports = { randomProgramLanguage };