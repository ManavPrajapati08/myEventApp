import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Circle, LucideIcon } from 'lucide-react-native';
import { colors } from '../../../constants/colors';

interface SocialLoginButtonProps {
  iconType: 'facebook' | 'twitter' | 'google';
  onPress: () => void;
  color?: string;
}

const getIcon = (_iconType: string): LucideIcon => {
  return Circle;
};

export const SocialLoginButton = ({
  iconType,
  onPress,
  color = colors.text,
}: SocialLoginButtonProps) => {
  const IconComponent = getIcon(iconType);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <IconComponent size={24} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.0,
    elevation: 2,
  },
});
