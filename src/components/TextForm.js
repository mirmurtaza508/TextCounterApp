import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newTxt = text.toUpperCase();
        setText(newTxt)
        props.showAlert("converted to upperCase","success")
    }
    const handleClClick = ()=>{
        let newTxt = text;
        newTxt = "";
        setText(newTxt)
        props.showAlert("clear all text","success")

    }

    const handleDoClick = ()=>{
        let newTxt = text.toLowerCase();
        setText(newTxt)
        props.showAlert("converted to lowerCase","success")

    }
    const handleOnChange = (evt)=>{
        setText(evt.target.value)
    }
    const copyTxt = ()=>{
        // let text = document.querySelector("#myBox");
        // text.select();
        // text.setSelectedRange();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("text copied","success");

    }
    const removeExtra = () =>{
        let newTxt = text.split(/[ ] + /);
        setText(newTxt.join(" "))
        props.showAlert("remove all extra spaces","success")

    }
    const [text, setText] = useState('');
    
    return (
        <>
    <div className="container">
        <h1 className={`text-${props.Mode === "light" ? "black" : "white"} mb-2`}>{props.heading}</h1>
      <div className="mb-3">
  <textarea  className="form-control"  style={{background: (props.Mode === "light" ? "white" : "black"),color : (props.Mode === "light" ? "black" : "white")}} value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
 </div>
 <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>upperCase</button>
 <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDoClick}>lowerCase</button>
 <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}>clear all</button>
 <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyTxt}>copyTxt</button>
 <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtra}>extra spaces</button>



    </div>
    <div className="container">
        <h2 className={`text-${props.Mode === "light" ? "black" : "white"}`}>
            Your text summary
        </h2>
        
        <p className={`text-${props.Mode === "light" ? "black" : "white"}`}>{text.split(/\s+/).filter((arr)=>{return arr.length !== 0}).length} words count | {text.length} characters count | {text.split(".").filter((arr)=>{return arr.length !== 0 }).length} sentence count</p>
        <p className={`text-${props.Mode === "light" ? "black" : "white"}`}>{0.008 * text.split(" ").filter((arr)=>{return arr.length !== 0}).length} Minutes read</p>
        <h2 className={`text-${props.Mode === "light" ? "black" : "white"}`}>Preview</h2>
        <p className={`text-${props.Mode === "light" ? "black" : "white"}`}>
            {text === "" ? "nothing to preview" : text}
        </p>

    </div>
    </>
  )
}
