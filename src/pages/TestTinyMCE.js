import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "../components/ui/Button";

const backendUrl = "https://localhost:7046/";

const tinyMCEApiKey = "xvg747f4fwkubgp85rlkyvbvqocdtnkgfcyqzhig8p55inlq";

const TestTinyMCE = (props) => {
  const editorRef = useRef(null);

  const imageUpLoadHandler = (blobInfo, success, failure, progress) => {
    console.log("uploading");
    let formData = new FormData();
    formData.append("image", blobInfo.blob(), blobInfo.filename());
    fetch(`https://localhost:7046/Decks/UploadPhysical`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP Error " + response.status);
        }
        return response.json();
      })
      .then((body) => {
        success(backendUrl + body.url);
      })
      .catch((error) => failure(error.message));
  };

  return (
    <div className="container mx-auto">
      <Editor
        apiKey={tinyMCEApiKey}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial value.</p>"
        init={{
          height: 30,
          max_height: 500,
          autoresize_bottom_margin: 10,
          images_upload_handler: imageUpLoadHandler,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help autoresize",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | image code | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          readonly: 1,
          menubar: false,
        }}
      />
      <Button
        className="mt-4"
        onClick={() => {
          if (editorRef.current) console.log(editorRef.current.getContent());
        }}
      >
        Test
      </Button>
    </div>
  );
};

export default TestTinyMCE;
