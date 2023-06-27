

import { CKEditor } from "@ckeditor/ckeditor5-react";
// Note: I'm  using @ckeditor/ckeditor5-build-classic v32.0.0. I got errors with newer versions
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const TextEditor = ({ onChange, name, value }) => {
    return (
        <CKEditor
            type=""
            name={name}
            editor={ClassicEditor}
            data={value}
            config={{
                ckfinder: {
                    // Upload the images to the server using the CKFinder QuickUpload command
                    // You have to change this address to your server that has the ckfinder php connector
                    uploadUrl: "/text-editor" //Enter your upload url
                }
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}
        />
    );
};
