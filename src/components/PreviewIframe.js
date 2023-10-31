import React from 'react';

function PreviewIframe({ formData }) {
  const pdfContent = `<html>
    <head>
      <title>Form Preview</title>
    </head>
    <body>
      <h1>Preview</h1>
      <p>Name: ${formData.fromName}</p>
      <p>Email: ${formData.fromEmail}</p>
      {/* Add more form fields as needed */}
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
