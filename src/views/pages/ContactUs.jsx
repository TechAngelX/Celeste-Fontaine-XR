import { lazy } from "react";
import '../../styles/index.css';
const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

const ContactUsView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="container my-3">
      <div className="row g-3">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <i className="bi bi-envelope"></i> Send Message
            </div>
            <div className="card-body">
              <ContactUsForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-header">
              <i className="bi bi-building"></i> Address
            </div>
            <div className="card-body">
              <h6 className="card-title border-bottom border-dark pb-2">
                Customer Support
              </h6>
              <address>
                <strong>Birkbeck, Univ of London.</strong>
                <br />
                Malet St,
                <br />
                London, WC1E 7HX
                <br />
                <i className="bi bi-telephone"></i>{" "}
                <abbr title="Phone">P:</abbr> 020 3926 3926
              </address>
              <h6 className="card-title border-bottom border-dark pb-2">
                Head Office
              </h6>
              <address>
                <strong>Birkbeck, Univ of London</strong>
                <br />
                Malet St,
                <br />
                London, WC1E 7HX
                <br />
                <i className="bi bi-telephone"></i>{" "}
                <abbr title="Phone">P:</abbr> 020 3926 3926
              </address>
            </div>
          </div>
          <div className="card">
            <div className="google-maps">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.545674517334!2d-0.13003718403458024!3d51.52016986892943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2d5c7d758b%3A0xd3079c871a5dcb3!2sBirkbeck%2C%20University%20of%20London%2C%20Malet%20St%2C%20London%20WC1E%207HX%2C%20UK!5e0!3m2!1sen!2sin!4v1695475047835!5m2!1sen!2sin"
                width={400}
                height={300}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsView;
