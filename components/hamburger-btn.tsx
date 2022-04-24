export const HamburgerBtn = ({ toggleMenu, isMenuOpen }: any) => {
  return (
    <>
      <div className="sm:hidden" onClick={toggleMenu}>
        <div
          className={`nav-icon mt-3 rtl:mr-3 ltr:ml-3 ${
            isMenuOpen ? 'open' : ''
          }`}
        >
          <span className="logo-bar"></span>
          <span className="logo-bar"></span>
          <span className="logo-bar"></span>
          <span className="logo-bar"></span>
        </div>
      </div>

      <style jsx>{`
        div.nav-icon {
          width: 42px;
          height: 32px;
          position: relative;
          padding: 8px;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: 0.5s ease-in-out;
          -moz-transition: 0.5s ease-in-out;
          -o-transition: 0.5s ease-in-out;
          transition: 0.5s ease-in-out;
          cursor: pointer;
          z-index: 1;
        }

        span.logo-bar {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: #5d2cee;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: 0.25s ease-in-out;
          -moz-transition: 0.25s ease-in-out;
          -o-transition: 0.25s ease-in-out;
          transition: 0.25s ease-in-out;
        }

        span:nth-child(1) {
          top: 0px;
        }
        span:nth-child(2),
        span:nth-child(3) {
          top: 10px;
        }
        span:nth-child(4) {
          top: 20px;
        }

        div.nav-icon.open span:nth-child(1) {
          top: 10px;
          width: 0%;
          left: 50%;
        }

        div.nav-icon.open span:nth-child(2) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        div.nav-icon.open span:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }

        div.nav-icon.open span:nth-child(4) {
          top: 10px;
          width: 0%;
          left: 50%;
        }
      `}</style>
    </>
  )
}
