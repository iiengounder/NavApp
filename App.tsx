import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text>More content...</Text>
          <Text>Even more content...</Text>
          <Text style = {styles.textStyle}>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text style = {styles.textStyle}>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text style = {styles.textStyle}>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text style = {styles.textStyle}>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <Text>Open up App.tsx to start working on your app!vjjjjjjjjjjjjjjjjjjjjjjjjj</Text>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textStyle: {
    fontSize: 200,
  }
});
