import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const backendUrl = "https://localhost:7046/";

const tinyMCEApiKey = "xvg747f4fwkubgp85rlkyvbvqocdtnkgfcyqzhig8p55inlq";

const FlashcardEditor = (props) => {
  const imageUpLoadHandler = (blobInfo, success, failure, progress) => {
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
    <div className="container border-b-2 border-gray-900 focus-within:border-blue-500">
      <Editor
        apiKey={tinyMCEApiKey}
        value={props.value}
        onEditorChange={(newValue, editor) => props.setValue(newValue)}
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
        }}
      />
    </div>
  );
};

export default FlashcardEditor;
