import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/Agriculture">Agricultura</Link></li>
        <li><Link to="/posts/categories/Business">Negocios</Link></li>
        <li><Link to="/posts/categories/Education">Educacion</Link></li>
        <li><Link to="/posts/categories/Entertainment">Entretenimiento</Link></li>
        <li><Link to="/posts/categories/Art">Art</Link></li>
        <li><Link to="/posts/categories/Investment">Inversiones</Link></li>
        <li><Link to="/posts/categories/Uncategorized">Sin Categoria</Link></li>
        <li><Link to="/posts/categories/Weather">Meterologia</Link></li>
      </ul>
      <div className="footer__copyright">
      </div>
    </footer>
  );
};

export default Footer;
