
function HeroVideo() {
  return (
    <div className="hero-video-frame" aria-label="Subham introduction video">
      <video
        className="hero-personal-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/subham-hero.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>

      <div className="hero-video-shade" />

      <div className="hero-video-caption">
        <span className="hero-video-live-dot" />
        <span>BEHIND THE VISION</span>
      </div>
    </div>
  );
}

export default HeroVideo;
