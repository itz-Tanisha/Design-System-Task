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
        icon={<span>✉</span>}
        iconPlacement="start"
        onClick={() => console.log("Email Sent !")}
      />
    </div>
  )
}

export default App
