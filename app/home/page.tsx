export default function Home() {
  return (
    <div>
      <video
        src={require('../../public/BG.mp4')}
        autoPlay
        muted
        loop
        className="video"
      />
    </div>
  );
}
