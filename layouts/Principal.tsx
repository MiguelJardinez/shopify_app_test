import TabNavigator from '../components/TabNavigator';
const Principal = ({children}) => {
  return (
    <>
      <TabNavigator />
      <div className="max-w-screen-lg m-auto bg-white pt-10 px-5 rounded-lg mb-10">
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Principal
