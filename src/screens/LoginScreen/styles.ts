import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  topSection: {
    height: 400,
    backgroundColor: '#D1D1D1',
    alignItems: 'center',
    paddingTop: 80,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoText: {
    fontSize: 64,
    fontWeight: '300',
    color: colors.white,
    letterSpacing: 2,
    zIndex: 1,
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
    justifyContent: 'flex-end',
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
