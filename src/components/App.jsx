import API from "services/API";




export const App = () => {
  const loadGames = async(game) => {
    try {
      const result = await API(game)
      const data = result
      console.log(data);
    } catch (error) {
      
    }
  }
  loadGames()
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
