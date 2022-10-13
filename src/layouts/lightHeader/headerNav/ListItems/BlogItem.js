import React from "react";

const BlogItem = () => {
  const Blogitems = [
    {
      title: "HOME",
      id: 100,
      menu: [
        { id: 5, name: "Main Home" },
        { id: 6, name: "Grid Home" },
        { id: 7, name: "Cosmetics Home" },
        { id: 8, name: "Products Gallery" },
        { id: 9, name: "Fullscreen Slider" },
        { id: 10, name: "Skincare Home" },
        { id: 11, name: "Landing" },
      ],
    },
    {
      title: "BLOG",
      id: 99,
      menu: [
        { id: 12, name: "Standard" },
        { id: 13, name: "Centered" },
        { id: 14, name: "No Sidebar" },
        { id: 15, name: "Post Types" },
      ],
    },
  ];
  console.log(Blogitems[0].id);
  console.log(Blogitems[1].id);

  return (
    <li className="special-li">
      <div className="right-menu">
        {Blogitems.map((item) => {
          return (
            <a key={item.id} className="effect-3" href={item.href}>
              {item.title}
            </a>
          );
        })}
        <div className="dropdown-menu test">
          {Blogitems.map((item) => {
            return item.menu.map((inneritem) => {
              return (
                <a key={inneritem.id} href={inneritem.href}>
                  {inneritem.name}
                </a>
              );
            });
          })}
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
