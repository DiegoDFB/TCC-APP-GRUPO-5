import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.navbarContainer}>
            <Text style={styles.navbarText}>Fellow Fox</Text>
            <Text style={styles.navbarSubText}>Fellow Fox</Text>
          </View>
          <View style={styles.containerConteudo}>
            <View style={styles.subContainerConteudo}>
              <Text style={styles.navbarSubText}>MENU</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.navbarSubText}>TCC GRUPO 5 3BI</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerBottom}>
        <View style={styles.navbarBottom}>
              <Text style={styles.navbarText}>MENU 2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000fff',
  },
  navbarContainer: {
    flex: 0.15,
    backgroundColor: '#fff000',
    justifyContent: 'center'
  },
  navbarText: {
    textAlign: 'center',
    fontSize: 40
  },
  navbarSubText: {
    textAlign: 'center',
    fontSize: 25
  },
  containerConteudo: {
    width: '100%',
    height: 800,
    backgroundColor: '#ff00ff',
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: 200,
    backgroundColor: '#00ffff',
    justifyContent: 'center'
  },
  subContainerConteudo: {
    flex: 0.9,
    width: '80%',
    backgroundColor: '#ff99ff',
    justifyContent: 'center',
    marginTop: '20%'
  },
  navbarBottom: {
    flex: 0.15,
    width: '100%',
    backgroundColor: '#99ff00',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute'
  },
  containerBottom: {
    justifyContent: 'flex-end'
  }
});
