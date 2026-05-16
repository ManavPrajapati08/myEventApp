import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { colors } from '../constants/colors';
import { Input } from '../shared/components/atoms/Input';
import { Button } from '../shared/components/atoms/Button';
import { SocialLoginButton } from '../shared/components/molecules/SocialLoginButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          {/* Top Section */}
          <View style={styles.topSection}>
            <Text style={styles.logoText}>Pliē</Text>
            <View style={styles.imagePlaceholder}>
              <Icon name="image-outline" size={60} color={colors.text} />
            </View>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <Input
              label="Email"
              placeholder="email@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input label="Password" placeholder="Password" isPassword />

            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signInButtonContainer}>
              <View style={styles.signInButtonWrapper}>
                <Button title="Sign In" onPress={() => {}} />
              </View>
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.notMemberText}>Not a member? </Text>
              <TouchableOpacity>
                <Text style={styles.signUpText}>Sign Up Here</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or Sign In with:</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialButtonsContainer}>
              <SocialLoginButton
                iconName="google"
                color="#DB4437"
                onPress={() => {}}
              />
              <SocialLoginButton
                iconName="apple"
                color="#000000"
                onPress={() => {}}
              />
              <SocialLoginButton
                iconName="facebook"
                color="#4267B2"
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>

        {/* Absolute positioned guest button */}
        <TouchableOpacity style={styles.guestButton}>
          <Text style={styles.guestText}>Enter as Guest</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D1D1D1',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  topSection: {
    height: 300,
    backgroundColor: '#D1D1D1',
    alignItems: 'center',
    paddingTop: 50,
  },
  logoText: {
    fontSize: 48,
    fontWeight: '300',
    color: colors.text,
    letterSpacing: 2,
  },
  imagePlaceholder: {
    marginTop: 60,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 60,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: -8,
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  signInButtonContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  signInButtonWrapper: {
    width: 120, // To match the narrow button in screenshot
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  notMemberText: {
    fontSize: 12,
    color: colors.text,
  },
  signUpText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    marginHorizontal: 10,
    color: colors.textSecondary,
    fontSize: 12,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  guestButton: {
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
  guestText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
