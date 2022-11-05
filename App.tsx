import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";
import { THEME } from './src/styles/theme';
import { SignIng } from "./src/screens/SignIng";

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
                {fontsLoaded ? <SignIng /> : <Loading />}
        </NativeBaseProvider>
    );
}
