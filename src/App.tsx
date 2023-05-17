import MainRoutes from './Routes'
import Sidebar from './components/Sidebar';


const App: React.FunctionComponent = () => {
  return (
    <div>
      <div className="w-full flex">
        <Sidebar/>
        <MainRoutes/>
      </div>
    </div>
  )
}

export default App
