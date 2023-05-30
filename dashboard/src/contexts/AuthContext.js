import { createContext, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { gapi, loadAuth2 } from 'gapi-script';

import useApi from '../hooks/api/useApi';
import { urls, config } from '../configs';

const DEFAUL_USER = {
  access: 0,
  dp: '',
  email: '',
  id: null,
  name: '',
  status: '',
  token: null,
};

const initialState = {
  user: null,
};

const AuthContext = createContext({
  ...initialState,
  setUser: () => {},
  login: () => {},
  getToken: () => {},
  logout: () => {},
  resetAuth: () => {},
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();
  const { fetchResponse } = useApi();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      // console.log('c/ac/108 auth changed', user);
    }
  }, [user]);

  const setUserData = (res) => {
    setUser({ ...DEFAUL_USER, ...res });
  };

  const login = async ({ email, password = '', image = '', type = 'password' }) => {
    return fetchResponse(urls.authenticate, 'POST', { email, password, image, type }, {}, true)
      .then((res) => {
        if (res.error) {
          enqueueSnackbar(res.message, { variant: 'error' });
          return;
        }

        setUserData(res);
      })
      .catch((err) => {
        // console.error('authContext/124', err);
        enqueueSnackbar(err.message, { variant: 'error' });
      });
  };

  const getToken = () =>
    fetchResponse(urls.getToken, 'GET', {}, {}, true, false).then((res) => {
      if (res.error) return;

      setUserData(res);
    });

  const logout = async () => {
    fetchResponse(urls.logout, 'GET', {}, {}, true).then((res) => {
      console.log('authContext/147', res);

      if (res.error) return;

      setUser(null);
    });
  };

  const resetAuth = () => {
    console.log('App data resetAuth');

    setUser(null);

    console.log('243', user);

    // clear only compulsory keys
    // localStorage.clear();
    // window.localStorage.removeItem("auth");
  };

  const authContextValue = useMemo(
    () => ({
      user,
      setUser,
      login,
      getToken,
      logout,
      resetAuth,
    }),
    [user, setUser, login, getToken, logout, resetAuth]
  );

  return (
    <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
