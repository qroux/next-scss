const copyToClipboard = () => {
  console.log("commence")
  navigator.clipboard.writeText("mon adresse mail")

}


export default function contacts() {
  return (
    <div>
      <h2>Contacts</h2>
      <button onClick={copyToClipboard}><h1>Click</h1></button>
    </div>
  )
}
