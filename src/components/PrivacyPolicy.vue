<template>
  <div class="privacy-policy">
    <h2>Privacy Policy</h2>

    <h3>
      <span style="color: #000; font-size: 15px"> Effective Date: April 17, 2023</span>
    </h3>
    <p>
      Welcome to RomelSuites Baguio ("we," "us," or "our"). We are committed to protecting your
      privacy and ensuring the confidentiality and security of your personal information. This
      Privacy Policy outlines how we collect, use, disclose, and protect the information you provide
      to us when you use our website or interact with our booking and payment services.
    </p>

    <div>
      <h3>
        <span class="start"> Information We Collect </span>
      </h3>
      <ul>
        <li>
          Personal Information: We may collect personally identifiable information, such as your
          name, address, email address, phone number, payment card details, and other similar
          information when you make a booking or payment on our website.
        </li>
        <li>
          Booking Information: We may collect information related to your hotel bookings, such as
          check-in and check-out dates, room preferences, special requests, and other details
          necessary to fulfill your reservation.
        </li>
        <li>
          Usage Information: We may automatically collect certain information about your use of our
          website and booking services, such as your IP address, device type, browser type,
          operating system, and usage patterns.
        </li>
        <li>
          Payment Information: We may collect payment information, including payment card details,
          when you make a reservation or payment on our website.
        </li>
      </ul>
    </div>

    <div>
      <h3>
        <span class="start"> How We Use Your Information</span>
      </h3>
      <ul>
        <li>
          Reservation and Payment Processing: We may use your information to process and confirm
          your hotel reservations, facilitate payments, and provide customer support related to your
          bookings.
        </li>
        <li>
          Communication: We may use your information to communicate with you about your bookings,
          send confirmation emails, provide updates, and respond to your inquiries or requests.
        </li>
        <li>
          Analytics: We may use your information for statistical or analytical purposes, such as
          analyzing booking trends, improving our services, and enhancing your experience on our
          website.
        </li>
        <li>
          Marketing: With your consent, we may use your information to send you promotional offers,
          newsletters, or other marketing communications, as well as to conduct market research or
          surveys.
        </li>
      </ul>
    </div>

    <div>
      <h3>
        <span class="start"> Information Sharing</span>
      </h3>

      <ul>
        <li>
          Service Providers: We may share your information with third-party service providers who
          help us operate our website or provide services on our behalf, such as payment processors,
          booking engines, and customer support providers.
        </li>
        <li>
          Business Partners: We may share your information with our business partners, such as
          hotels or resorts, to fulfill your bookings or provide additional services requested by
          you.
        </li>
        <li>
          Legal Requirements: We may disclose your information to comply with applicable laws,
          regulations, or legal processes, or to respond to a subpoena, court order, or government
          request for information.
        </li>
      </ul>
    </div>
  </div>
  <div class="scroll-top">
    <!--scrollbar at the end of main-->
    <a class="scroll-top__link" href="#">Back to top</a>
    <!--href="#" navigates to the top of the page-->
  </div>
</template>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Pangram', sans-serif;
  font-size: 14px;
  color: #452a08;
}

@media (max-width: 768px) {
  .privacy-policy {
    padding: 0 20px;
  }
}

.start {
  background-color: #452a08;
  border: #452a08;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
  padding-right: 10px;
}

main {
  position: relative;
} /* to place scrollbar */
section {
  height: 300vh;
} /* so we can scroll */
footer {
  height: 0.5rem;
} /* a typical footer height */

.scroll-top {
  position: absolute; /* relative to its positioned <main> parent */
  top: 120vh; /* starts below the bottom of the screen */
  bottom: 3rem; /* stops scrolling before the end */
  right: 2rem; /* offset from right hand side */
}

.scroll-top__link {
  position: -webkit-sticky; /* for Safari */
  position: sticky; /* 'relative' until element reaches... */
  top: 10vh; /* 90% viewport height from the top, when it becomes 'fixed' - until its container toggles it back to 'relative' */
}
</style>
<script></script>
