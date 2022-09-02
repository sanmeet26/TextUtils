import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("");
    // text = "new"; // wrong way to change state variable
    // setText("New text"); // correct way to change state variable

    const showFile = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
          const txt = e.target.result;
        //   console.log(txt);
          setText(txt);
        };
        reader.readAsText(e.target.files[0]);
      };

    const onSentenceClick = () => {
        if(text === "") {
            props.showAlert("Text not entered!!", "warning");
        }
        else {
            let result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
            // console.log("on UpperCase clicked ---", text);
            // let result = text.toUpperCase();
            result = result.replaceAll(" i ", " I ");
            setText(result);
        }
    }
    const onUpClick = () => {
        if(text === "") {
            props.showAlert("Text not entered!!", "warning");
        }
        else {
            // console.log("on UpperCase clicked ---", text);
            let result = text.toUpperCase();
            setText(result);
        }
    }
    const onLowClick = () => {
        if(text === "") {
            props.showAlert("Text not entered!!", "warning");
        }
        else {
            // console.log("on UpperCase clicked ---", text);
            let result = text.toLowerCase();
            setText(result);
        }
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
        if(text === "") {
            props.showAlert("Text not entered!!", "warning");
        }
        else {
            console.log("File Download clicked");
            // // const { spawn } = require('child_process');
            // // const childPython = spawn('python', ['--version']);
            // const fs = require("fs");
            // fileName += ".txt";
            // fileName = "C:\\Users\\sanmeet\\Downloads\\" + fileName;
            // fs.open(fileName, "w");
            // fs.writeFile(fileName, text);
            // fs.close();
            
            let fileName = prompt("Enter file name", "file");
            // let filename = "readme.txt";
            // let text = "Text of the file goes here.\n1";
            let blob = new Blob([text], {type:'text/plain'});
            let link = document.createElement("a");
            link.download = fileName;
            //link.innerHTML = "Download File";
            link.href = window.URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(link.href);
            }, 100);
        }
    }
    const onCopyClick = () => {
        if(text === "") {
            props.showAlert("Text not entered!!", "warning");
        }
        else {
            let tBox = document.getElementById("text-box");
            tBox.select();
            navigator.clipboard.writeText(tBox.value);
            props.showAlert("Text copied!", "success");
        }
    }
    const onFindReplaceClick = () => {
        if(text === "") {
            props.showAlert("Text not entered!!", "warning");
        }
        else {
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
        <div className="container my-3" style={{color:props.mode==='light' || props.mode==='yellow'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" id="text-box" rows="7" value={text} onChange={onChangeClick} placeholder="Enter text here..."></textarea>
            </div>
            <div className="my-2">
                <h5>or Upload Text File</h5>
                <input type="file" onChange={showFile} />
            </div>
            <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={onSentenceClick}>Convert to SentenceCase</button>
            <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={onUpClick}>Convert to UpperCase</button>
            <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={onLowClick}>Convert to LowerCase</button>
            <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={onFindReplaceClick}>Find and Replace</button>
            <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={onDownloadClick}>Download <i className="fa fa-download"></i></button>
            <button className={`btn btn-${props.btn} mx-2 my-2`} onClick={onCopyClick}>Copy Text</button>
            <button className="btn btn-danger mx-2 my-2" onClick={onClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light' || props.mode==='yellow'?'black':'white'}}>
            <h4>Text Summary:</h4>
            <p>{getTextWordCount()} words, {text.length} characters</p>
            <p>{getTextWordCount() * 0.008} minutes read</p>
        </div>
        </>
    )
}
