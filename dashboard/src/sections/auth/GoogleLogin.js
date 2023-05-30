import React, { useState, useEffect } from 'react';
import { gapi, loadAuth2 } from 'gapi-script';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
//
import SvgIconStyle from '../../components/micro/SvgIconStyle';
import useAuth from '../../hooks/useAuth';
import { config } from '../../configs';

let auth2;

// -----------------------------------------------

export default function LoginForm() {
  const [isSubmitting, setSubmitting] = useState(false);

  const { login } = useAuth();

  const setAuth2 = async () => {
    // https://stackoverflow.com/questions/72623110/google-oauth2-results-in-pop-up-closed-by-user
    auth2 = await loadAuth2(gapi, config.GOOGLE_CLIENT_ID, '');

    if (auth2.isSignedIn.get()) {
      updateUser(auth2.currentUser.get());
    } else {
      attachSignin(document.getElementById('google-login'), auth2);
    }
  };

  useEffect(() => {
    setAuth2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUser = async (currentUser) => {
    console.log('update User getBasicProfile', currentUser.getBasicProfile());

    const email = currentUser.getBasicProfile().getEmail();
    const image = currentUser.getBasicProfile().getImageUrl();

    if (email) {
      console.log(email);
      setSubmitting(true);

      // got the email now logout
      auth2.signOut().then(() => {
        console.log('google signed out.');
      });

      // signOut();

      await login({ email, image, type: 'google' });
      setSubmitting(false);
    }
  };

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        console.log('update User', googleUser);

        updateUser(googleUser);
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  };

  // const signOut = () => {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(() => {
  //     console.log('78 User signed out.');
  //   });
  // }

  return (
    <LoadingButton
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      color="inherit"
      id="google-login"
      loading={isSubmitting}
      startIcon={<img alt="google" src="assets/svg/google.svg" style={{ width: 20, height: 20 }} />}
      sx={{
        bgcolor: (theme) => theme.palette.grey[100],
        color: (theme) => theme.palette.grey[700],
      }}
    >
      Sign in with Google
    </LoadingButton>
  );
}
