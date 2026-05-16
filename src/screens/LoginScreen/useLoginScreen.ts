import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export const useLoginScreen = (onLoginSuccess: () => void) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    if (isAuthenticated) {
      onLoginSuccess();
    }
  }, [isAuthenticated, onLoginSuccess]);

  useEffect(() => {
    if (error) {
      Alert.alert('Login Failed', error);
    }
  }, [error]);

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      const errorMessage = Object.values(errors).join('\n');
      Alert.alert('Validation Error', errorMessage);
      return;
    }

    dispatch(loginUser(formData) as any);
  };

  return {
    formData,
    isLoading,
    handleInputChange,
    handleLogin,
  };
};
