import React, { useState } from 'react'


export default function TextForm(props) {
    const upConverter = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const loConverter = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Remove this dummy text and enter your own!')
    return (
        <>
            <div>
                <h2 className='text-center my-4'>{props.title}</h2>
                <textarea className="form-control p-4" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={upConverter}>Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={loConverter}>Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-2">RLE Compression</button>
            </div>
            <div className="container m-0 p-0">
                <h2>Text Summary</h2>
                <p className='my-0'>Words: {text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
                <p className='my-0'>Character: {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
            </div>
        </>
    );
}

TextForm.defaultProps = {
    title: "Enter Text here"
};
