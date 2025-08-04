import "./faq.css";

function FAQ() {
  return (
    <>
      <div className="faqcontainer">
        <div className="menuTitlePhotoContainer">
            <p className="menuTitlePhotoText">FAQ</p>
        </div>
                        <div className="pattern-tiles"></div>

        <div className="accordion accordionBlueSky" id="accordionExample">

{/* ALLERGY WARNING */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingAllergy">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseAllergy"
      aria-expanded="false"
      aria-controls="collapseAllergy"
    >
      I have an allergic reaction to certain items. Can you remove them?
    </button>
  </h2>
  <div
    id="collapseAllergy"
    className="accordion-collapse collapse"
    aria-labelledby="headingAllergy"
    data-bs-parent="#accordionExample"
  >
    <div className="accordion-body">
      <strong>Food Allergy Notice:</strong><br />
      Please let our staff know if you have any allergies. While we’ll do our best to accommodate your request, all dishes are prepared in the same kitchen and cross-contamination may occur. For your safety, we may be unable to service you.
    </div>
  </div>
</div>


          {/* LOCATION */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Where are you located?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We’re located at <strong>7323 Fair Oaks Blvd, Carmichael, CA 95608</strong> — right next to McDonald's.
              </div>
            </div>
          </div>

          {/* HOURS */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What are your hours of operation?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p><strong>Monday:</strong> Closed</p>
                <p><strong>Tues–Thurs:</strong> 11:30 AM – 3:00 PM & 4:00 PM – 9:00 PM</p>
                <p><strong>Fri–Sat:</strong> 11:30 AM – 3:00 PM & 4:00 PM – 9:30 PM</p>
                <p><strong>Sunday:</strong> 4:00 PM – 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* RESERVATIONS */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Do you take reservations?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We currently do <strong>not accept reservations</strong>. Walk-ins are always welcome!
              </div>
            </div>
          </div>

          {/* DELIVERY/TAKEOUT */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Do you offer delivery or takeout?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, we offer <strong>takeout</strong>, and delivery is available through <strong>DoorDash, Grubhub, and Uber Eats</strong>.
              </div>
            </div>
          </div>

          {/* PARKING */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Is parking available?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, we have <strong>free parking</strong> available.
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                What’s the best way to contact you?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Call us at <strong>(916) 485‑5311</strong> for takeout orders or any questions.
              </div>
            </div>
          </div>

          {/* VEGETARIAN */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Do you have vegetarian or vegan options?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, we offer a variety of <strong>vegetarian options</strong>. Just ask and we’ll be happy to help.
              </div>
            </div>
          </div>

          {/* CUSTOMIZATION */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Can I customize my order?
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, we can adjust spice levels and add/remove  certain ingredients on request.
              </div>
            </div>
          </div>

          {/* POPULAR DISHES */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                What are your most popular dishes?
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Some of our most-loved dishes include:
                <ul>
                  <li>Honey Walnut Chicken/Shrimp</li>
                  <li>General Tso's Chicken</li>
                  <li>Mongolian Beef</li>
                  <li>String Bean Deluxe</li>
                  <li>Wor Wonton Soup</li>
                  <li>Chicken Chowmein</li>
                  <li>Sweet & Sour Pork</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                What forms of payment do you accept?
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We accept <strong>cash, credit/debit cards, and mobile payments</strong> (Apple Pay, Google Pay, etc.).
              </div>
            </div>
          </div>

          {/* CHANGES / MODS */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                Do you charge extra for substitutions or modifications?
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Some substitutions or modifications may have incur an extra charge.<br />
                <strong>Feel free to ask us if you'd like to know in advance!</strong>
              </div>
            </div>
          </div>

          {/* CATERING */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwelve">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                Do you offer catering?
              </button>
            </h2>
            <div
              id="collapseTwelve"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwelve"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, we offer <strong>catering services</strong>.<br />
                First-time catering customers should visit us in person to view portion sizes available and are required to leave a percentage deposit.
              </div>
            </div>
          </div>

          {/* EVENTS */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThirteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirteen"
                aria-expanded="false"
                aria-controls="collapseThirteen"
              >
                Do you host private events or parties?
              </button>
            </h2>
            <div
              id="collapseThirteen"
              className="accordion-collapse collapse"
              aria-labelledby="headingThirteen"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We currently do <strong>not host private events or parties</strong>.
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="pattern-tiles"></div>

    </>
  );
}

export default FAQ;
