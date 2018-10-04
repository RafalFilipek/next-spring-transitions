import React from "react";
import Link from "next/link";
import ProgressiveImage from "react-progressive-image";

const photos = [
  "https://source.unsplash.com/fUnfEz3VLv4",
  "https://source.unsplash.com/03Pv2Ikm5Hk",
  "https://source.unsplash.com/e0lswhTboHA",
  "https://source.unsplash.com/b3PuuRU8IPc",
  "https://source.unsplash.com/q--1RyVkoD4",
  "https://source.unsplash.com/egzVUq4o7bM"
];

export default class Index extends React.Component {
  static async getInitialProps(ctx) {
    return new Promise(resolve => {
      const index = parseInt(ctx.query.img || 0, 10);
      setTimeout(() => {
        resolve({
          index
        });
      }, 100 * (index + 1));
    });
  }

  render() {
    const index = this.props.index;
    const nextIndex = (index + 1) % photos.length;

    return (
      <div style={{ width: 600, margin: "20px auto" }}>
        <Link href={"/?img=" + nextIndex}>
          <a>
            <ProgressiveImage
              style={{ borderRadius: 10 }}
              src={photos[index] + "/600x400"}
              placeholder={photos[index] + "/60x40"}
            >
              {(src, loading) => (
                <img
                  style={{ opacity: loading ? 0.5 : 1 }}
                  width="600"
                  height="400"
                  src={src}
                  alt=""
                />
              )}
            </ProgressiveImage>
          </a>
        </Link>
        <div style={{ textAlign: "center" }}>
          <Link href="/lipsum">
            <a className="button is-link">
              <strong>Want some lipsum</strong>
            </a>
          </Link>
          <small style={{ padding: 16 }}>,</small>
          <Link href="/video">
            <a className="button is-link">
              <strong>Video</strong>
            </a>
          </Link>
          <small style={{ padding: 16 }}>or</small>
          <Link href="/custom">
            <a className="button is-link">
              <strong>Custom Transition</strong>
            </a>
          </Link>
          <small style={{ padding: 16 }}>?</small>
        </div>
      </div>
    );
  }
}
