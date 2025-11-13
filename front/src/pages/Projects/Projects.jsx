import React from 'react';
import './Projects.css';
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";


export default function Projectsoff() {
  return (
    <><div className="projects" id="projects">
      <HorizontalScroll />
      <div className="cc-slice">
  <div className="cc-slice-media">
    <img
      src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1600&auto=format&fit=crop"
      alt="Visuel"
      loading="lazy"
      className="cc-slice-img"
    />
  </div>

  <div className="cc-slice-copy">
    <h2 className="cc-slice-title">Lorem Ipsum</h2>
    <p className="cc-slice-text">
      Aliquam metus lacus, efficitur sit amet ligula a, vehicula eleifend dolor. Pellentesque vulputate
      consectetur lectus, sit amet pellentesque leo congue ut. Vivamus turpis est, mollis et elit eget,
      venenatis dictum nisl. Suspendisse sit amet erat vel ipsum elementum mattis. In vel sagittis velit.
    </p>
  </div>
</div>
    </div>
    </>
  );
}
