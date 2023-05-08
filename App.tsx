import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";

const App = () => (
  <>
    <StatusBar style="auto" />
    <NativeRouter>
      <Main />
    </NativeRouter>
  </>
);

export default App;
