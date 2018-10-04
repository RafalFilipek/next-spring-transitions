import React from 'react';
import App, { Container } from 'next/app';
import { Transition, config, animated } from 'react-spring';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, router: router };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Transition
          keys={[router.asPath]}
          native
          from={{
            opacity: 0,
            position: 'absolute',
            transform: 'translateY(100px)',
          }}
          enter={{
            opacity: 1,
            position: 'static',
            transform: 'translateY(0px)',
          }}
          leave={{
            opacity: 0,
            position: 'absolute',
            transform: 'translateY(-100px)',
          }}
        >
          {styles => (
            <animated.div style={{ width: '100vw', ...styles }}>
              <Component {...pageProps} />
            </animated.div>
          )}
        </Transition>
      </Container>
    );
  }
}
