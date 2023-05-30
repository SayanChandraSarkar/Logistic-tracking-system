import React, { useEffect } from 'react';
import { gapi, loadAuth2 } from 'gapi-script';
// @mui
import Container from '@mui/material/Container';
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/micro/Page';
// sections
import { config } from "../../configs";

// -----------------------------------------------


export default function Login() {
  const { logout } = useAuth();


  const setAuth2 = async () => {
    try {
      const auth2 = await loadAuth2(gapi, config.GOOGLE_CLIENT_ID, '')
      await auth2.signOut().then(() => {
        console.log('google signed out.');
      });
    }
    catch (err) {
      console.log('ERROR 27', err);
    }

    setTimeout(() => {
      logout();
    }, 3000);
  }


  useEffect(() => {
    setAuth2();

    // logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Page title="Logout">
      <Container maxWidth="sm">
        Loggin out...
      </Container>
    </Page>
  );
}
