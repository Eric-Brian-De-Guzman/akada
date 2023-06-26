<template>
  <div class="agree-policy">
    <h2>Agreement Policy</h2>
    <h3>
      <span style="color: #000; font-size: 15px"> Effective Date: April 17, 2023</span>
    </h3>
    <p>
      Welcome to RomelSuites! By using our website, booking our services, or accessing our workspace
      facilities, you are agreeing to comply with our Agreement Policy. Please review the following
      terms and conditions carefully;
    </p>

    <div class="info-collect section">
      <h3>
        <span class="start"> 1. Reservation Agreement </span>
      </h3>
      <ul>
        <li>
          a. When you make a reservation for a workspace at RomelSuites, you are entering into a
          binding agreement with us, and you agree to provide accurate and complete information
          during the booking process.
        </li>
        <li>
          b. You acknowledge that the reservation is subject to avability, and RomelSuites reserves
          the right to modify or cancel your reservation in the event of unforeseen circumstances,
          such as maintenance issues or other operational reasons.
        </li>
        <li>
          c. RomelSuites reserves the right to refuse or cancel a reservation at any time, at our
          sole discretion, without providing any reason.
        </li>
      </ul>
    </div>

    <div class="use-info section">
      <h3>
        <span class="start"> 2. Payment Agreement:</span>
      </h3>
      <ul>
        <li>
          a. You agree to provide valid payment information at the time of booking, and you
          authorize RomelSuites to charge the applicable fees. including room rates, taxes, and any
          other charges associated with your reservation.
        </li>
        <li>
          b. if you have booked a Non-Refundable Rate, you acknowledge that the payment is
          non-refundable, and no refund will be provided for any cancellation or no-show.
        </li>
        <li>
          c. It you have booked a Flexible Rate, you acknowledge that the payment is refundable
          according to our Cancellation and Refund Policy, as stated in the separate policy
          document.
        </li>
      </ul>
    </div>

    <div class="info-share section">
      <h3>
        <span class="start"> 3. Use of Workspace:</span>
      </h3>

      <ul>
        <li>
          a. You agree to use the workspace facilities at RomelSuites in a responsible and
          respectful manner. and in compliance with all applicable laws, regulations. and policies
        </li>
        <li>
          b. You acknowledge that RomelSuites is not responsible for any loss, theft, or damage to
          your personal belongings or property during your use of the workspace
        </li>
        <li>
          c. You agree not to engage in any illegal, disruptive, or harmful activities that may
          disturb other guests, stati the general operation of RomelSuites.
        </li>
      </ul>
    </div>

    <div class="info-share section">
      <h3>
        <span class="start"> 4. Modification or Cancellation of Agreement:</span>
      </h3>

      <ul>
        <li>
          a. RomelSuites reserves the right to modify or cancel this Agreement Policy at any time,
          without prior notice, by posting the updated policy on our website. It is your
          responsibility to review the policy periodically for any changes.
        </li>
        <li>
          b.RomelSuites may also terminate this Agreement and cancel your reservation for any
          violation of our policies, misconduct, or failure to comply with the terms and conditions
          sted in this Agreement Policy.
        </li>
      </ul>
    </div>

    <div class="info-share section">
      <h3>
        <span class="start"> 5. Confidentiality and Privacy:</span>
      </h3>

      <ul>
        <li>
          a. RomelSuites respects your privacy and is committed to protecting the confidentiality
          and security of your personal information. Please refer to our Privacy Policy, as stated
          in the separate policy document, for detailed information on how we collect, use,
          disclose, and protect your information.
        </li>
      </ul>
    </div>

    <div class="info-share section">
      <h3>
        <span class="start"> 6. Limitation of Liability:</span>
      </h3>

      <ul>
        <li>
          a. RomelSuites shall not be liable for any direct, indirect, incidental, consequential, or
          punitive damages arising from your use of our website, booking services, or workspace
          facilities, including but not limited to loss of data, loss of business opportunities, or
          any other damages or losses
        </li>
        <li>
          b.RomelSuites shall not be liable for any delays, interruptions, or errors in our website
          or booking services, or for any issues arising from third-party websites, services, or
          products.
        </li>
      </ul>
    </div>

    <div class="info-share section">
      <h3>
        <span class="start"> 7.Governing Law and Jurisdiction:</span>
      </h3>

      <ul>
        <li>
          a. This Agreement Policy shall be governed by and interpreted in accordance with the laws
          of the jurisdiction.
        </li>
        <li>
          b. Any disputes arising from or related to this Agreement Policy shall be resolved
          exclusively in the courts of the jurisdiction where RomelSuites is located. By using our
          website, booking our services, or accessing our workspace facilities, you acknowledge and
          agree to comply with this Agreement Policy. If you have any questions or concerns please
          contact romelsuitesbaguio@gmail.com. Thank you for your understanding and cooperation.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
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
.agree-policy {
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
</style>
<script></script>
