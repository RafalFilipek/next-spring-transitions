import Link from 'next/link';

export default () => (
  <div style={{ width: 600, margin: '20px auto' }} className="content">
    <h2>Hello</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis
      aliquam nisi, ac posuere erat. Donec vulputate odio ac tempor malesuada.
      Aliquam bibendum odio enim. Nunc sit amet finibus risus, a tincidunt nisl.
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos. Maecenas fermentum, sapien ac elementum ultrices, ante
      urna tristique arcu, vitae posuere diam dolor sed ex. Nulla eu fringilla
      massa, et sagittis orci. In tincidunt tristique pulvinar. Ut augue diam,
      pharetra at massa vestibulum, fringilla pretium elit.
    </p>
    <p>
      Etiam id pulvinar nunc, a volutpat nunc. Duis vitae auctor mi. Nunc sed
      imperdiet lectus, eu vehicula sapien. Proin porttitor libero mi, in
      hendrerit nisl aliquet eget. Vivamus varius risus in erat porta, non porta
      elit tristique. Fusce id dignissim tellus, a consequat eros. Mauris sit
      amet mi vel elit mollis facilisis sit amet ac nisi. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc
      eros mi, sollicitudin ac viverra non, luctus vel justo. Quisque tempus
      tellus rhoncus sodales consequat. Duis aliquet tortor vitae arcu
      elementum, non scelerisque sapien fermentum. Etiam ac quam eleifend mi
      commodo pulvinar. Pellentesque varius id velit vitae porta.
    </p>
    <div style={{ textAlign: 'center' }}>
      <Link href="/">
        <a className="button is-link">
          <strong>Want some images</strong>
        </a>
      </Link>
      <small style={{ padding: 16 }}>or</small>
      <Link href="/video">
        <a className="button is-link">
          <strong>Video</strong>
        </a>
      </Link>
      <small style={{ padding: 16 }}>?</small>
    </div>
  </div>
);
