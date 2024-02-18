import './App.css'
import Fetch from './components/Fetch/fetch'
import LoadingSpinner from './components/LoadingSpinner/loading-spinner'
import ConstructorPage from "./pages/ConstructorPage/constructor-page"

const App = () => {
  return (
    <>
      <header
        className='header'
      >
        Какая-то шапка
      </header>
      <main
        className='main'
      >
        <Fetch
          endpoint='/ingredients'
          loadingFallback={<LoadingSpinner />}
          renderSuccess={
            (data) =>
              <ConstructorPage data={data} />
          }
        />
      </main>
    </>
  )
}

export default App
