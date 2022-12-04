import React, { useState } from 'react'

export default function TextForm(props) {
    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const copyToClipBoard = () => {
        let copyText = document.getElementById('myBox')
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        alert("Copied the text:-" + copyText.value)
    }
    const downloadFile = () => {
        const textToWrite = document.getElementById('myBox').value
        let textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        let downloadLink = document.createElement("a");
        downloadLink.download = 'download.text';
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
        else {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            // downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }
    // const handleCursor = () => {
    //     setText('')
    // }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleClick}>set to upperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>set to lowerCase</button>
                <button className="btn btn-primary mx-1" onClick={copyToClipBoard}>copy text</button>
                <button className="btn btn-primary mx-1" onClick={downloadFile}>download</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}