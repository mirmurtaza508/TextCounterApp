import React from 'react'

export default function About(props) {
    
    // const [myStyle,setStyle] = useState(    {
    //     color : "white",
    //     background : "black",
    // })
    let myStyle = {
      color : props.mode === "dark" ? "white" : "black",
      background : props.mode === "dark" ? "black" : "white",
    }

  return (
    <div className="container p-3 " style={myStyle} >
        <h1>{props.head}</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={myStyle} aria-controls="collapseOne">
        Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={myStyle} aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count and word count statistics for a 
        given text. TextUtils reports the number of words and characters. Thus it is suitable for writing 
        text word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software work in any web browsers such as chrome, firefox, internet 
        explorer, safari, opers. It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}
