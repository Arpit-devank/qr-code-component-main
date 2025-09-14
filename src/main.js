import './style.css'
import { setupCounter } from './counter.js'

document.querySelector("#app").innerHTML = `
<main>
<div class="container">
<img src="images/image-qr-code.png" title="frontend mentor QR Code">
  <h1>Improve your front-end skills by building projects
  </h1>

  <p>
  Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
  </p>
</div>
</main>
`;

setupCounter(document.querySelector('#counter'))
