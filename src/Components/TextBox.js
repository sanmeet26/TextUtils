import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("");
    // text = "new"; // wrong way to change state variable
    // setText("New text"); // correct way to change state variable

    const onUpClick = () => {
        // console.log("on UpperCase clicked ---", text);
        let result = text.toUpperCase();
        setText(result);
    }
    const onLowClick = () => {
        // console.log("on UpperCase clicked ---", text);
        let result = text.toLowerCase();
        setText(result);
    }
    const onChangeClick = (event) => {
        // console.log("on Change clicked");
        setText(event.target.value);
    }
    const onClearClick = () => {
        // console.log("clear text");
        setText("");
    }
    const onDownloadClick = () => {
        console.log("File Download clicked");
        // // const { spawn } = require('child_process');
        // // const childPython = spawn('python', ['--version']);
        // const fs = require("fs");
        // let fileName = prompt("Enter file name", "file");
        // fileName += ".txt";
        // fileName = "C:\\Users\\sanmeet\\Downloads\\" + fileName;
        // fs.open(fileName, "w");
        // fs.writeFile(fileName, text);
        // fs.close();
    }
    const onFindReplaceClick = () => {
        let partToChange = prompt("Find:");
        let changeWith = prompt("Replace with:");
        const isReplaceAll = window.confirm("Do you want to replace all occurences?");

        // console.log(partToChange);
        // console.log(changeWith);
        // console.log(isReplaceAll);

        if(isReplaceAll) {
            setText(text.replaceAll(partToChange, changeWith));
        }
        else {
            setText(text.replace(partToChange, changeWith));
        }
    }


    function getTextWordCount() {
        if(text === "")
            return 0;

        let tempText = text.trim();

        tempText = tempText.replaceAll('\n', ' ');

        let array = tempText.split(' ');
        array = array.filter(function (element) {
            return element.length > 0 && element !== '.';
        });
        // console.log(array);

        return array.length;
    }

    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" id="text-box" rows="7" value={text} onChange={onChangeClick} placeholder="Enter text here..."></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={onUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={onLowClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={onClearClick}>Clear Text</button>
            {/* <button className="btn glyphicon glyphicon-download-alt">Download</button> */}
            <button className="btn btn-primary mx-2" onClick={onDownloadClick}>Download <i className="fa fa-download"></i></button>
            <button className="btn btn-primary mx-2" onClick={onFindReplaceClick}>Find and Replace</button>
        </div>
        <div className="container my-3">
            <h4>Text Summary:</h4>
            <p>{getTextWordCount()} words, {text.length} characters</p>
            <p>{getTextWordCount() * 0.008} minutes read</p>
        </div>
        </>
    )
}
