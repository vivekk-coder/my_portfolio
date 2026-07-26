import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    num: "01",
    title: "Cliffside Sanctuary",
    desc: "A breathtaking minimalist concrete residence cantilevered over a serene ocean, blurring the boundaries between interior comfort and wild nature.",
    image: img1,
    location: "Amalfi Coast, Italy",
    year: "2025",
  },
  {
    id: 2,
    num: "02",
    title: "Monolithic Echoes",
    desc: "A stunning brutalist sculpture garden that plays with daylight shadows and high concrete walls to create a contemplative space.",
    image: img2,
    location: "Naoshima, Japan",
    year: "2026",
  },
  {
    id: 3,
    num: "03",
    title: "Sands of Eternity",
    desc: "A futuristic concrete library nestled inside desert sand dunes, featuring flowing curves inspired by natural sand ripples.",
    image: img3,
    location: "Al Faya, UAE",
    year: "2024",
  },
  {
    id: 4,
    num: "04",
    title: "Ethereal Canopy",
    desc: "A modern steel and glass pavilion built inside a tropical greenhouse, where structure and organic plant life merge harmoniously.",
    image: img4,
    location: "Singapore",
    year: "2026",
  }
];

export default function HorizontalGallery() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const progressFillRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    
    // Safety check and small delay to ensure DOM is fully rendered and dimensions are accurate
    const timer = setTimeout(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      // Calculate horizontal scrollable distance
      const containerWidth = container.offsetWidth;
      const scrollWidth = containerWidth - window.innerWidth;

      ctx = gsap.context(() => {
        // Create the pin animation
        gsap.to(container, {
          x: () => -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.8, // subtle easing for smoother scrolling
            start: "top top",
            end: () => `+=${scrollWidth}`,
            invalidateOnRefresh: true, // re-calculates dimensions on window resize
            onUpdate: (self) => {
              if (progressFillRef.current) {
                progressFillRef.current.style.width = `${self.progress * 100}%`;
              }
            }
          }
        });
      }, section);
    }, 100); // 100ms safety delay

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section" id="gallery">
      <div ref={containerRef} className="gallery-container">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-slide">
            <div className="slide-content">
              <div className="slide-info">
                <span className="slide-number">{item.num}</span>
                <h2 className="slide-title">{item.title}</h2>
                <p className="slide-desc">{item.desc}</p>
                <div className="slide-details">
                  <div className="detail-item">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{item.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Year</span>
                    <span className="detail-value">{item.year}</span>
                  </div>
                </div>
              </div>
              <div className="slide-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="slide-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gallery horizontal progress bar */}
      <div className="gallery-progress-bar">
        <div ref={progressFillRef} className="gallery-progress-fill"></div>
      </div>
    </section>
  );
}
