import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const FlashcardEditor = (props) => {
  const imageUpLoadHandler = (blobInfo, success, failure, progress) => {
    let formData = new FormData();
    formData.append("image", blobInfo.blob(), blobInfo.filename());
    fetch(`${process.env.REACT_APP_BACKEND_URL}images/upload/blob`, {
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
        success(process.env.REACT_APP_BACKEND_URL + body.url);
      })
      .catch((error) => failure(error.message));
  };

  return (
    <div className="container border-b-2 border-gray-900 focus-within:border-blue-500">
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_APIKEY}
        value={props.value}
        onEditorChange={(newValue, editor) => {
          props.setValue(newValue);
        }}
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
          content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px; text-align: center; }`,
          menubar: false,
          statusbar: false,
          inline: true,
          style_formats: [
            { title: "Center", block: "p", styles: { "text-align": "center" } },
          ],
        }}
      />
    </div>
  );
};

export default FlashcardEditor;
