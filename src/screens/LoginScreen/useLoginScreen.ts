import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { loginUser } from '../../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

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

  const dispatch = useAppDispatch();
  const { isLoading, error, isAuthenticated } = useAppSelector(
    state => state.auth,
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

    dispatch(loginUser(formData));
  };

  return {
    formData,
    isLoading,
    handleInputChange,
    handleLogin,
  };
};
