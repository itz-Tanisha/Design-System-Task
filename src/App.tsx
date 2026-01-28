import Button from "./components/Button/Button"

function App() {

  return (
    <div
      style={{ padding: "20px" }}
    >
      {/* Inline spacing just to display the Button component clearly */}
      <Button
        label="Send Email"
        size="lg"
        variant="primary"
        icon={<span>✉</span>}
        iconPlacememt="start"
        onClick={() => console.log("Email Sent !")}
      />
    </div>
  )
}

export default App
