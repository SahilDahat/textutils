import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
      //console.log("UpperCase was Clicked! " + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase","Success");
    }

    const handleOnChange = (event) => {
      //console.log("On Change");
      setText(event.target.value)
    }

    const handleDownClick = () => {
      //console.log("UpperCase was Clicked! " + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","Success");
    }

    let n = text.split(" ").filter((element) => {return element.length!==0}).length;

    const handleClear = () => {
      setText('');
      props.showAlert("Text is Cleared!","Success");
    }

    const handleCopy = () => {
      var text = document.getElementById("my-box");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","Success");
    }

    const handleSpaces = () => {
      let newText = text.split(/[ ]+/); 
      setText(newText.join(" "));
      props.showAlert("Spaces are removed!","Success");
    }

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className='form-control' value = {text} onChange={handleOnChange} id='my-box' rows = "6"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    
      <h2 className='my-3'>Your Text Summary</h2>
      <p>{n} words & {text.length} characters </p>
      <p> {0.01 * n} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0? text:"Enter something in the textbox above to preview it here!"}</p>
    </div>
    </>
  )
}