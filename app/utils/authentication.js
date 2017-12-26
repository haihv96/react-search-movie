export const facebookSDK = () => {
  return new Promise((resolve, reject) => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: '1900284210301960',
        cookie: true,
        xfbml: true,
        version: 'v2.11'
      });
      resolve();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
};
