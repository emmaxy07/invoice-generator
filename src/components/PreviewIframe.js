import React from 'react';
import "./PreviewIframe.css";

function PreviewIframe({ formData }) {
  const pdfContent = `<html>
    <head>
      <title>Form Preview</title>
    </head>
    <body>
      <h1>Preview</h1>
      <main>
      <h1  class="clearfix"><small><span>DATE</span><br />August 17, 2015</small> INVOICE 3-2-1 <small><span>DUE DATE</span><br /> September 17, 2015</small></h1>
      <table>
        <thead>
          <tr>
            <th class="desc">DESCRIPTION</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="desc">Creating a recognizable design solution based on the company's existing visual identity</td>
            <td class="unit">$40.00</td>
            <td class="qty">26</td>
            <td class="total">$1,040.00</td>
          </tr>
          <tr>
            <td class="desc">Developing a Content Management System-based Website</td>
            <td class="unit">$40.00</td>
            <td class="qty">80</td>
            <td class="total">$3,200.00</td>
          </tr>
          <tr>
            <td class="desc">Optimize the site for search engines (SEO)</td>
            <td class="unit">$40.00</td>
            <td class="qty">20</td>
            <td class="total">$800.00</td>
          </tr>
          <tr>
            <td class="desc">Initial training sessions for staff responsible for uploading web content</td>
            <td class="unit">$40.00</td>
            <td class="qty">4</td>
            <td class="total">$160.00</td>
          </tr>
          <tr>
            <td colspan="4" class="sub">SUBTOTAL</td>
            <td class="sub total">$5,200.00</td>
          </tr>
          <tr>
            <td colspan="4">TAX 25%</td>
            <td class="total">$1,300.00</td>
          </tr>
          <tr>
            <td colspan="4" class="grand total">GRAND TOTAL</td>
            <td class="grand total">$6,500.00</td>
          </tr>
        </tbody>
      </table>
      <div id="details" class="clearfix">
        <div id="project">
          <div class="arrow"><div class="inner-arrow"><span>PROJECT</span> Website development</div></div>
          <div class="arrow"><div class="inner-arrow"><span>CLIENT</span> ${formData.billName}</div></div>
          <div class="arrow"><div class="inner-arrow"><span>ADDRESS</span> ${formData.billAddress} ${formData.billCountry}</div></div>
          <div class="arrow"><div class="inner-arrow"><span>EMAIL</span> <a href="mailto:john@example.com">${formData.billEmail}</a></div></div>
        </div>
        <div id="company">
          <div class="arrow back"><div class="inner-arrow">${formData.fromName} <span>COMPANY</span></div></div>
          <div class="arrow back"><div class="inner-arrow">${formData.fromAddress} ${formData.fromCountry} <span>ADDRESS</span></div></div>
          <div class="arrow back"><div class="inner-arrow">${formData.fromPhone} <span>PHONE</span></div></div>
          <div class="arrow back"><div class="inner-arrow"><a href="mailto:company@example.com">${formData.fromEmail}</a> <span>EMAIL</span></div></div>
        </div>
      </div>
      <div id="notices">
        <div>NOTICE:</div>
        <div class="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
      </div>
    </main>
    <footer>
      Invoice was created on a computer and is valid without the signature and seal.
    </footer>
    </body>
  </html>`;

  return (
    <iframe
      title="Preview"
      width="100%"
      height="100vh"
      srcDoc={pdfContent}
    />
  );
}

export default PreviewIframe;
