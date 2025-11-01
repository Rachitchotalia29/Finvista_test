import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import api from '../services/api.js';

const AuthContext = createContext();

const getStoredAuth = () => {
  try {
    const raw = localStorage.getItem('aqverium_auth');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed to parse stored auth state', error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => getStoredAuth());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authState) {
      localStorage.setItem('aqverium_auth', JSON.stringify(authState));
    } else {
      localStorage.removeItem('aqverium_auth');
    }
  }, [authState]);

  const login = useCallback(async (credentials) => {
    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', credentials);
      setAuthState({ token: data.token, user: data.user });
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Unable to login'
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (values) => {
    setLoading(true);
    try {
      const { data } = await api.post('/auth/register', values);
      setAuthState({ token: data.token, user: data.user });
      return { success: true };
    } catch (error) {
      console.error('Signup failed:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Unable to sign up'
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setAuthState(null);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!authState?.token) return;

    try {
      const { data } = await api.get('/users/me', {
        headers: {
          Authorization: `Bearer ${authState.token}`
        }
      });
      setAuthState((prev) => (prev ? { ...prev, user: data } : prev));
    } catch (error) {
      console.error('Failed to refresh profile', error);
    }
  }, [authState?.token]);

  const value = useMemo(
    () => ({
      user: authState?.user || null,
      token: authState?.token || null,
      loading,
      login,
      signup,
      logout,
      refreshProfile
    }),
    [authState, loading, login, signup, logout, refreshProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
