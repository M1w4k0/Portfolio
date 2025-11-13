import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

let scrollSpeed = 0;
let currentScroll = 0;

// window.addEventListener('wheel', (e) => {
//   e.preventDefault();
//   scrollSpeed += e.deltaY * 0.8;
// }, { passive: false });

// function smoothScroll() {
//   currentScroll += (scrollSpeed - currentScroll);
//   window.scrollTo(0, currentScroll);
//   requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

