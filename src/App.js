import { ThemeProvider } from "@mui/system";
import { AppBarPage } from "./components/AppBarPage";
import Articles from "./components/Articles";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Questioning from "./components/Questioning";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBarPage />
      <Banner />
      <Questioning />
      <Articles />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
