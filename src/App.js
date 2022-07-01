import { BrowserRouter} from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Routes from "./routes"

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes />   
          <ScrollToTop />
        </BrowserRouter>
    </>
  )
}

export default App
