import pdfFile from '../../../../public/Resume.pdf'


const Navbar = () => {

    const handleResume = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.download = 'Resume.pdf';
        link.click();
    }
  return (
    <div 
    className="navbar fixed z-10  bg-opacity-30 max-w-screen-xl text-white bg-black"
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-700 font-bold"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact me</a>
              </li>
            </ul>
          </div>
          <a className="font-bold text-3xl "> <span className="text-[#3b0707]">#</span>Tansim</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-slate-700 font-bold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a>Contact me</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
            <button onClick={handleResume} className="btn bg-[#3b0707] text-white border-none">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
