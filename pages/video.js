import Link from "next/link";

export default () => (
  <div style={{ width: 600, margin: "20px auto" }} className="content">
    <iframe
      title="Roll"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
    <div style={{ textAlign: "center" }}>
      <Link href="/">
        <a className="button is-link">
          <strong>Want some images</strong>
        </a>
      </Link>
      <small style={{ padding: 16 }}>or</small>
      <Link href="/lipsum">
        <a className="button is-link">
          <strong>Lipsum</strong>
        </a>
      </Link>
      <small style={{ padding: 16 }}>?</small>
    </div>
  </div>
);
