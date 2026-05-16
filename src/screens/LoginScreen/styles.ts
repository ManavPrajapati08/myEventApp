import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
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
    width: 120,
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
