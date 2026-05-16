import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Button } from '../../shared/components/atoms/Button';
import { SocialLoginButton } from '../../shared/components/molecules/SocialLoginButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '../../shared/components/atoms/Input';
import { useLoginScreen } from './useLoginScreen';
import { styles } from './styles';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen = ({ onLoginSuccess }: LoginScreenProps) => {
  const { formData, isLoading, handleInputChange, handleLogin } =
    useLoginScreen(onLoginSuccess);

  const renderHeader = () => (
    <ImageBackground
      source={require('../../assets/images/hero.jpg')}
      style={styles.topSection}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <Text style={styles.logoText}>Pliē</Text>
    </ImageBackground>
  );

  const renderEmailInput = () => (
    <Input
      label="Email"
      placeholder="email@email.com"
      keyboardType="email-address"
      autoCapitalize="none"
      value={formData.email}
      onChangeText={text => handleInputChange('email', text)}
    />
  );

  const renderPasswordInput = () => (
    <Input
      label="Password"
      placeholder="Password"
      isPassword
      value={formData.password}
      onChangeText={text => handleInputChange('password', text)}
    />
  );

  const renderForgotPassword = () => (
    <View style={styles.forgotPasswordContainer}>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSignInButton = () => (
    <View style={styles.signInButtonContainer}>
      <View style={styles.signInButtonWrapper}>
        <Button
          title="Sign In"
          onPress={handleLogin}
          loading={isLoading}
          disabled={isLoading}
        />
      </View>
    </View>
  );

  const renderSignUpLink = () => (
    <View style={styles.signUpContainer}>
      <Text style={styles.notMemberText}>Not a member? </Text>
      <TouchableOpacity>
        <Text style={styles.signUpText}>Sign Up Here</Text>
      </TouchableOpacity>
    </View>
  );

  const renderDivider = () => (
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
      <Text style={styles.dividerText}>or Sign In with:</Text>
      <View style={styles.divider} />
    </View>
  );

  const renderSocialButtons = () => (
    <View style={styles.socialButtonsContainer}>
      <SocialLoginButton iconName="google" color="#DB4437" onPress={() => {}} />
      <SocialLoginButton iconName="apple" color="#000000" onPress={() => {}} />
      <SocialLoginButton
        iconName="facebook"
        color="#4267B2"
        onPress={() => {}}
      />
    </View>
  );

  const renderGuestButton = () => (
    <TouchableOpacity style={styles.guestButton}>
      <Text style={styles.guestText}>Enter as Guest</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          {renderHeader()}

          <View style={styles.bottomSection}>
            {renderEmailInput()}
            {renderPasswordInput()}
            {renderForgotPassword()}
            {renderSignInButton()}
            {renderSignUpLink()}
            {renderDivider()}
            {renderSocialButtons()}
          </View>
        </ScrollView>

        {renderGuestButton()}
      </View>
    </SafeAreaView>
  );
};
