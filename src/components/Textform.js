import React,{useState} from 'react'

export default function Textform(props) {
  const[text,setText]=useState('Enter Text Here');
//   setText('new text')
const handleup=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert('Converted to UpperCase','success')
}
const handlelo=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert('Converted to LowerCase','success')
}
const clear=()=>{
    setText("")
    props.showalert('Text Cleared','success')
}
const copy=()=>{
    var text=document.getElementById('mytext')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showalert('Text Copied','success')
}  
const handleonchange=(event)=>{
    setText(event.target.value);
}
    return (
        <>
    <div className='container' style={{color: props.mode=='dark'? 'white':'black'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="mytext" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode=='dark'? 'black':'white',color: props.mode=='dark'? 'white':'black'}}></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleup}>Convert to UpperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlelo}>Convert to LowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clear}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={copy}>Handle Copy</button>

    </div>
    <div className='container my-3' style={{color: props.mode=='dark'? 'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").filter((ele)=>{return ele.length!=0}).length} words and {text.length} characters</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
