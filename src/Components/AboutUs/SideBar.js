import "./SideBar.css";
 
 function SideBar() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }
 
  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }
 
  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }
 
  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }
 
  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }
 
  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }
 
  window.onscroll = function () {
    jet();
  };
 
  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }
 
  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;
 
      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">
      <nav>
        <div>
          <a href="mailto: SrichandanaSriram@gmail.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/email-letter-envelope-message-38065.png"
              alt="G-mail"
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
            SrichandanaSriram@gmail.com
            </span>
          </a>
          <a href="tel: +91 123456789">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/telephone-41-117249.png"
              alt=""
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              +91 123456789
            </span>
          </a>
        </div>
        <div>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/instagram-1868978-1583142.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-3771014-3147631.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
              alt=""
            />
          </a>
        </div>
      </nav>
      <header id="head">
        <a href={{}}>
          <span>
            {/* <img
              src="https://www.ecerasystem.com/ecerasystem/images/eslogo.png"
              alt="Logo"
            /> */}
          </span>
          <span id="c_name">ShopOn</span>
        </a>
        <ul>
          <li>
            <a href={{}}>Home</a>
          </li>
          <li>
            <a href={{}} onMouseOver={gok} onMouseLeave={kog}>
              Register/Sign In
            </a>
            <div id="brr"></div>
          </li>
          <li>
            <a href={{}} onMouseOver={fok} onMouseLeave={kof}>
              Services
            </a>
            <div id="arr"></div>
          </li>
          <li>
            <a href={{}}>Contact Us</a>
          </li>
        </ul>
      </header>
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome,To ShopOn Hypermart</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p>
            " Our goal is to eliminate any barriers that hinder admins from managing and visualizing the growth of their stores. With our powerful tools, we empower store owners to track sales, analyze growth, and gain valuable insights into their business performance. Whether you're managing a single store or multiple outlets, we're here to support you in achieving your business goals and making informed decisions for your stores' success. "
          </p>
        </div>
 
        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <h1>We Provide Cutting-Edge Solutions for Your Business</h1>
            <p>
            At ShopOn, we specialize in empowering admins and store owners with innovative tools to manage and grow their businesses. Our platform offers a comprehensive solution for visualizing store performance, tracking sales, and optimizing growth. We take a customized approach to ensure our tools meet the unique needs of every store, whether it’s focusing on analytics, growth insights, or operational efficiency.
            </p>
            <h2>Growth Analytics & Insights(90%)</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>Store Performance Tracking  (85%)</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2>Inventory & Sales Management(70%)</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>
 
        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>TECHNOLOGY INDEX</h2>
          <h1 style={{ color: "white" }}>
          Empowering Store Management with Real-Time Insights and Advanced Digital Solutions
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>SALES & GROWTH ANALYTICS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>INTUITIVE DASHBOARDS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>ONLINE STORE MANAGEMENT</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>EXPERT SUPPORT TEAM</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>DEDICATED TEAM</p>
            </div>
          </div>
        </div>
 
        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>WE PROVIDE</h1>
              <h2>Comprehensive Store Management</h2>
              <p>
              Access a vast array of tools to manage your stores effectively. Solve operational challenges with our platform, designed to help you visualize growth, track performance, and manage sales seamlessly. Everything is simplified for a smooth admin experience!
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>WE HAVE</h1>
              <h2>A Growing Network of Partners</h2>
              <p>
              Our global network spans across multiple regions, and our client base continues to expand daily. Many of our users are repeat customers who recommend us to others due to their positive experience. Store owners from various domains trust our platform to meet their unique needs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR GOAL</h1>
              <h2>Empowering Growth at Minimal Cost</h2>
              <p>
              We are committed to providing powerful tools and insights at a fraction of the cost. Our innovative solutions bridge the gap for small and medium-sized businesses that need efficient management systems. Our services deliver high-quality results while remaining affordable, ensuring that every admin can thrive.
                costs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>Seamless Integration of Technology and Support</h2>
              <p>
              We equip admins with advanced technology and dedicated support to manage their stores efficiently. From real-time monitoring to robust data analytics, we ensure that managing your hypermart feels effortless and effective. Our tools and solutions make remote store management as real and impactful as working on-site.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>
 
        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
          <h1 style={{ textAlign: "center" }}>
          Driving Store Success Through Innovative Solutions
          </h1>
          <div id="third_cards">
            <div>
              <h2>End to End Solutions and Services Guaranteed</h2>
              <p>
              End-to-end tools and services designed to empower admins and store owners. From tracking sales to analyzing growth, we ensure a seamless management experience.
              </p>
            </div>
            <div>
              <h2>Staying Ahead of the Competition</h2>
              <p>
              We future-proof your business with advanced insights and robust technologies, enabling you to stay ahead in the competitive retail market.
              </p>
            </div>
            <div>
              <h2>Delivering Excellence in Every Store</h2>
              <p>
              Our solutions are designed to ensure success for every admin, with tools that make managing stores simple, effective, and results-driven.
              </p>
            </div>
          </div>
        </div>
 
        <div id="fifth" className="reveal">
          <h1> ShopOn</h1>
          <div>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt=" "
              />
              <span>
                <h3>Address</h3>
                <p>UST Campus, Innovation Drive Technopark Phase II, Trivandrum 695583</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
              />
              <span>
                <h3>Phone</h3>
                <p>+1 248 672 1972</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
              />
              <span>
                <h3>E-mail</h3>
                <p>Chandana@ShopOn.com</p>
              </span>
            </a>
          </div>
        </div>
      </main>
 
      <footer
        style={{ display: "flex", "justify-content": "space-around" }}
        id="foote"
      >
        <ul>
          <li>
            <a href={{}}>About Us</a>
          </li>
          <li>
            <a href={{}}>Carrers</a>
          </li>
          <li>
            <a href={{}}>Blogs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={{}}>Training</a>
          </li>
          <li>
            <a href={{}}>FAQs</a>
          </li>
        </ul>
        <div>
          <h2>Conatact Us</h2>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt=" "
              />
            </a>
          </span>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt=" "
              />
            </a>
          </span>
          <a
            href="tel: 123456789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px"
            }}
          >
            Telephone No: +91 232345553
          </a>
        </div>
      </footer>
      <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;Copyright <b>ecerasystem</b>. All Rights Reserved
      </p>
    </div>
  );
}
 
 
export default SideBar;
 