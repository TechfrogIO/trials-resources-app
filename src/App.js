import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button } from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bike Trials Resources</h1>
        <p>Lots of hopping up, across, and down on bikes.</p>
        <p>And occassionally crashing.</p>
      </header>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}
export default withAuthenticator(App);
