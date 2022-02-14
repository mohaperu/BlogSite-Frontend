const oktaAuthConfig = {
    issuer: 'https://dev-48634998.okta.com/oauth2/default',
    clientId: '0oa3vnix4xG88y5YB5d7',
    redirectUri: window.location.origin + '/login/callback',
};
  
const oktaSignInConfig = {
    baseUrl: 'https://dev-48634998.okta.com',
    clientId: '0oa3vnix4xG88y5YB5d7',
    redirectUri: window.location.origin + '/login/callback',
    logo: 'blog.png',
    authParams: {
        // If your app is configured to use the Implicit flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
    }
// Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};
  
export { oktaAuthConfig, oktaSignInConfig };