import Button from "./components/Button/Button"

function App() {

  return (
    <div
      className="button-container"
    >
      <Button
        label="Send Email"
        size="lg"
        variant="primary"
        startIcon={<span>⎙</span>}
        endIcon={<span>➤</span>}
        onClick={() => console.log("Email Sent !")}
      />
    </div>
  )
}

export default App
