const HomeItem = () => {
  const Homeitems = [
    { id: 1, title: "Main Home" },
    { id: 2, title: "Grid Home" },
    { id: 3, title: "Cosmetics Home" },
    { id: 4, title: "Product Gallery" },
    { id: 5, title: "Fullscreen Slider" },
    { id: 6, title: "Skincare Home" },
    { id: 7, title: "Landing" },
  ];
  return (
    <li className="special-li">
      <div className="right-menu">
        {/* <a className="effect-3" href={Homeitem.href}>
          {props.title}
        </a> */}
        <div className="dropdown-menu">
          {Homeitems.map((Homeitem) => {
            return (
              <a key={Homeitem.id} href={Homeitem.href}>
                {Homeitem.title}
              </a>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default HomeItem;
