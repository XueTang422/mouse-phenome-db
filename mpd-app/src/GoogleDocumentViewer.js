import React from 'react';
const GoogleDocumentViewer = () => {
  const documentURL = 'https://docs.google.com/presentation/d/e/2PACX-1vQpuTY4cfRNm2Hb5GiNMTl3bTGyw6iK57kmBGqR5YU5iqKiEjYGck1RgD21gCWtagvfzovvsDNTV33_/embed?start=false&loop=false&delayms=3000';
  return (
    <div>
      <iframe src={documentURL} frameborder="0" width="600" height="374" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
  );
};
export default GoogleDocumentViewer;