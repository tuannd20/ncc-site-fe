import MainRoutes from './Routes'
import Sidebar from './components/Sidebar';
// import './App.css'


const App: React.FunctionComponent = () => {
  return (
    <div>
      <div className="w-full flex min-h-screen">
        <div className="">
          <Sidebar/>
        </div>
        <div className=''>
          <MainRoutes/>
        </div>
      </div>
    </div>
  )
}

export default App
