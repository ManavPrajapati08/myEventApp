import { StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 26,
    fontFamily: fonts.gothicA1.bold,
    color: '#000',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 16,
    fontFamily: fonts.gothicA1.regular,
    color: '#6B7280',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  listContent: {
    padding: 16,
    paddingBottom: 24,
  },
  centered: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: fonts.gothicA1.semiBold,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 16,
  },
  emptySubText: {
    fontSize: 14,
    fontFamily: fonts.gothicA1.regular,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 8,
  },
});
