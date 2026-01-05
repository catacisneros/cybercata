import './VideoSingle.css'

function VideoSingle({ videoId, cite, children }) {
  return (
    <div className="video-single-item">
      <blockquote
        className="tiktok-embed"
        cite={cite}
        data-video-id={videoId}
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          {children}
        </section>
      </blockquote>
    </div>
  )
}

export default VideoSingle
