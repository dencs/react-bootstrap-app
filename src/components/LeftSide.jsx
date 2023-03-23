export default function LeftSide() {
  const items = [
    {
      icon: "list-task",
      url: "",
    },
    {
      icon: "house-fill",
      url: "",
    },
    {
      icon: "cloud-fill",
      url: "",
    },
    {
      icon: "currency-exchange",
      url: "",
    },
    {
      icon: "code-slash",
      url: "",
    },
    {
      icon: "people-fill",
      url: "",
    },
    {
      icon: "arrow-repeat",
      url: "",
    },
    {
      icon: "plus-lg",
      url: "",
    },
  ];

  return (
    <div className="leftside d-none d-md-flex flex-column align-items-center px-0">
      {items.map(function (elem, index) {
        return (
          <i
            key={index}
            tabIndex={index + 7}
            className={"pb-2 px-2  bi bi-" + elem.icon}
          ></i>
        );
      })}
    </div>
  );
}

function OffcanvasLeftSide() {
  const items = [
    {
      icon: "list-task",
      url: "",
    },
    {
      icon: "house-fill",
      url: "",
    },
    {
      icon: "cloud-fill",
      url: "",
    },
    {
      icon: "currency-exchange",
      url: "",
    },
    {
      icon: "code-slash",
      url: "",
    },
    {
      icon: "people-fill",
      url: "",
    },
    {
      icon: "arrow-repeat",
      url: "",
    },
    {
      icon: "plus-lg",
      url: "",
    },
  ];
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-body d-flex flex-column align-items-center">
      {items.map(function (elem, index) {
        return <i key={index} className={" mt-0 my-1 bi bi-" + elem.icon}></i>;
      })}
      {/* <hr />
      <i className="bi bi-pencil-fill my-1"></i>
        <i className="bi bi-bell-fill my-1"></i>
        <i className="bi bi-person-fill my-1 mb-0"></i> */}

      </div>
    </div>
  );
}

export { OffcanvasLeftSide };
