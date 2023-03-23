export default function TopBar({setTheme, theme}) {
  return (
    <div className="row text-bg-dark row-cols-1 row-cols-md-3 py-2 gy-2 mb-3">
      <div className="menu d-flex justify-content-end d-md-none">
      <a
        className="text-white "
          data-bs-toggle="offcanvas"
          href="#offcanvasRight"
          role="button"
          aria-controls="offcanvasRightLabel"
        >
          <i className="bi bi-list"></i>
        </a>
      </div>
      <div className="col d-md-flex d-block text-center align-items-center">
        <h1 tabIndex={1}> Carbon Cloud Dashboard </h1>
       
      </div>
      <div className="col">
        <div className="input-group">
          <input
            tabIndex={2}
            type="text"
            className="form-control"
            placeholder="Search resources..."
            aria-label="Search resources"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
      <div className="col d-md-flex text-center align-items-center justify-content-end">
        
        <i className="bi bi-pencil-fill me-2" tabIndex={3}></i>
        <i className="bi bi-bell-fill mx-3" tabIndex={4}></i>
        <i className="bi bi-person-fill mx-3" tabIndex={5}></i>
        <i className="bi bi-universal-access-circle ms-2" tabIndex={6} onClick={() => { return setTheme(theme === 'default' ? 'dark' : 'default') }}></i>
      </div>
    </div>
  );
}
