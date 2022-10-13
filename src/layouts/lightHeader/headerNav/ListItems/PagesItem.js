const PagesItem = () => {
  const Pageitems = [
    { id: 1, title: "About Us" },
    { id: 2, title: "Our Team" },
    { id: 3, title: "FAQ Page" },
    { id: 4, title: "Coming Soon" },
    { id: 5, title: "Pricing Plans" },
  ];
  return (
    <li className="special-li">
      <div className="right-menu">
        {/* <a href="/" className="effect-3">
          {props.title}
        </a> */}
        <div className="dropdown-menu">
          {Pageitems.map((Pageitem) => {
            return (
              <a key={Pageitem.id} href={Pageitem.href}>
                {Pageitem.title}
              </a>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default PagesItem;
