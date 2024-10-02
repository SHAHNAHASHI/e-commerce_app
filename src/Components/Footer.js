import "../Components/Footer.css";
function Footer() {
  return (
    <div className="Footer">
     <div className="footer__container">
        <div className="footer__section">
          <h3>Quick Links:</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>HELP:</h3>
          <ul>
            <li>
              <a href="/about">Payments</a>
            </li>
            <li>
              <a href="/services">Shipping</a>
            </li>
            <li>
              <a href="/contact">Cancellation&Returns</a>
            </li>
            <li>
              <a href="/privacy">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>OFFICE ADDRESS:</h3>
          <p>MAZON EXPRES COMPANY</p>
          <p>MAZONE BUILDING</p>
          <p>ERNAKULAM,EDAPPALY</p>
          <p>Email: contact@example.com</p>
          <p>Phone: +1-234-567-890</p>
        </div>
        <div className="footer__section">
          <h3>Get To Know Us:</h3>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
           
            <li>
              <a href="/contact">Careers</a>
            </li>
            <li>
              <a href="/privacy">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
