import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GlobalProvider } from './src/context/globalContext';
import StackScreeen from './src/routes/stack';

export default function App() {

        return (
                <SafeAreaView style={{ flex: 1 }}>
                        <SafeAreaProvider>
                                <GlobalProvider>
                                        <NavigationContainer>
                                                <StackScreeen />
                                        </NavigationContainer>
                                </GlobalProvider>
                        </SafeAreaProvider>
                </SafeAreaView>
        );
}
