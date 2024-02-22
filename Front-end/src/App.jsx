import Header2 from "./componants/header/Header2"
import Header1 from "./componants/header/Header1"
import Header3 from "./componants/header/Header3"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"
import Hero from "./componants/hero/Hero";
import Main from "./componants/main/Main";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
<Header1/>
<Header2/>
<Header3/>
<Hero/>
<Main/>

</ThemeProvider>
    </ColorModeContext.Provider>
  
  )
}

export default App
