import React, { useState } from "react";
import { useDeleteLinkMutation } from "../app/apiSlice";
import EditLinkForm from "./EditLinkForm";

function EditLinkCard({ linkToEdit }) {
  const [deleteLink] = useDeleteLinkMutation();
  const [isEditable, setEditable] = useState(false);

  return (
    <>
      <div>
        <div>
          {!isEditable && (
            <>
              <h5>{linkToEdit.name}</h5>
              <p>{linkToEdit.link}</p>
              <button
                type="button"
                onClick={() => {
                  setEditable(!isEditable);
                }}
              >
                Edit
              </button>

              <button onClick={() => deleteLink(linkToEdit.link_id)}>
                Delete
              </button>
            </>
          )}
          {isEditable && (
            <>
              <EditLinkForm
                linkToEdit={linkToEdit}
                isSubmitted={() => setEditable(false)}
              ></EditLinkForm>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default EditLinkCard;
