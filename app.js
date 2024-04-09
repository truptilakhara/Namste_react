// ReactElement is a object =>HTML (browser understand)
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heelloo i am react."
);
// const heading2 = React.createElement("h2", {}, "Helllo heading 2");
// const heading3 = React.createElement("h3", {}, "Helllo heading 3");
// const child = React.createElement("div", { id: "child" }, [heading2, heading3]);
// const parent = React.createElement("div", { id: "parent" }, child);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "hellloo heading 2"),
    React.createElement("h3", {}, "Helloo heading 3"),
  ])
);

console.log(heading); //Object

root.render(parent);
