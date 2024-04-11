function App() {
  return (
    <div>
       <Tweet
        name="Andrea G"
        username="Angue123"
        date={new Date().toDateString()}
        message="Happy Monday!"
      />

       <Tweet
        name="David C"
        username="Soccerplayer"
        date={new Date().toDateString()}
        message="Who is watching the show today?, DM"
      />
    
       <Tweet
        name="Benji Lee"
        username="LeeBennn1"
        date={new Date().toDateString()}
        message="Life is short. Smile while you still have teeth."
      />
    </div>
    );   
  }