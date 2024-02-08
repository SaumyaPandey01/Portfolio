import "@/components/Nav.css";

const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>HOME</li>
        <li>WORK</li>
        <li>EXPERIENCE</li>
      </ul>
      
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 65.86 68.92"
          style={{
            width:"3rem"
          }}
        >
          <defs></defs>
          <path style={{fill:"#8a733e"}} d="M65.86,68.1v.82H44V68.1l4.42-7.58L42.31,45.64h-20L16.5,60.52,21.55,68v.91H5.76V68l6.05-7.49L29.67,15.86,25.61,5.93,37.16,1.69,60.8,60.52ZM40.86,42,32.11,20.82,23.81,42Z" />
          <polygon style={{fill:"#8a733e"}} points="62.34 12.54 52.94 11.2 47.05 18.68 56.48 20.01 62.34 12.54" />
          <polygon style={{fill:"#8a733e"}} points="57.07 22.69 47.63 21.36 51.2 30.24 60.66 31.43 57.07 22.69" />
          <polygon style={{fill:"#8a733e"}} points="48.05 0 42.03 7.4 45.59 16.29 51.49 8.8 48.05 0" />
          <polygon style={{fill:"#8a733e"}} points="0 37.69 5.87 45.14 15.3 43.79 9.39 36.32 0 37.69" />
          <polygon style={{fill:"#8a733e"}} points="10.81 33.98 16.74 41.45 20.27 32.56 14.24 25.18 10.81 33.98" />
          <polygon style={{fill:"#8a733e"}} points="1.7 56.63 11.15 55.42 14.71 46.54 5.27 47.88 1.7 56.63" />
        </svg>
    

      <ul>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>CONTACT</li>
      </ul>
    
    </nav>
  );
};

export default Nav;
