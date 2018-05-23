import React from 'react';
import { OAuthLoginButton } from 'veritone-widgets';
import { AppContainer } from 'veritone-react-common';

const Auth = () => (
  <AppContainer>
    <OAuthLoginButton
      clientId="dc56afa1-9887-46fa-bd6b-5eb3ecab5be4"
      redirectUri={window.origin}
    />
  </AppContainer>
);

export default Auth;
