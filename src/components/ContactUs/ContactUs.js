import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <h1> About the founders</h1>
      <p>
        Zero Carbon was founded and built by the Terraling team!
        <br />
        <br />
        If you want to contact us, feel free to click our names below, which
        will take you to our LinkedIn profiles!
      </p>
      <h2 className="teamContacts"> Engineers</h2>
      <ul className="teamNames">
        <li>
          <a href="https://www.linkedin.com/in/pspyoung/" target="_blank">
            Peter Young
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/michellemcpherson126/"
            target="_blank"
          >
            Michelle McPherson
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marvin-merida/" target="_blank">
            Marvin Merida
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jackychengjc/" target="_blank">
            Jacky Cheng
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sergiolaguardia/"
            target="_blank"
          >
            Sergio Laguardia
          </a>
        </li>
      </ul>

      <h2 className="teamContacts"> UX/UI Designers</h2>
      <ul className="teamNames">
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/ernesto-fernandez-571b286/"
            target="_blank"
          >
            Ernesto Fernandez
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/lena-slone-5bb2b4231/"
            target="_blank"
          >
            Lena Stone
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
