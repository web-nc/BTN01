import React, { useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function RichTextEditor({ editorState, setEditorState }) {
  const editorRef = useRef();

  return (
    <div onClick={() => editorRef.current.focusEditor()}>
      <Editor
        ref={editorRef}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        placeholder="Chi tiết.."
        editorStyle={{ maxHeight: "8rem", minHeight: "6rem" }}
        onEditorStateChange={(state) => setEditorState(state)}
        toolbar={{
          options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "colorPicker", "history"],
          inline: {
            options: ["bold", "italic", "underline", "strikethrough", "monospace"],
          },
        }}
      />
    </div>
  );
}
