import React from "react";
import Link from "next/link";

export default class Custom extends React.Component {
  static async getInitialProps() {
    return {
      transitionEnter: {
        opacity: 1,
        position: "static",
        transform: "rotateZ(0deg)"
      },
      transitionLeave: {
        opacity: 0,
        position: "absolute",
        transform: "rotateZ(270deg)"
      }
    };
  }
  render() {
    return (
      <div style={{ width: 600, margin: "20px auto" }} className="content">
        <h2>Hello</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis
          aliquam nisi, ac posuere erat. Donec vulputate odio ac tempor
          malesuada. Aliquam bibendum odio enim. Nunc sit amet finibus risus, a
          tincidunt nisl. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Maecenas fermentum, sapien ac
          elementum ultrices, ante urna tristique arcu, vitae posuere diam dolor
          sed ex. Nulla eu fringilla massa, et sagittis orci. In tincidunt
          tristique pulvinar. Ut augue diam, pharetra at massa vestibulum,
          fringilla pretium elit.
        </p>
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
  }
}
