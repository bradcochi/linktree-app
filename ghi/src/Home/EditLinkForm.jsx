import React, { useState, useEffect } from "react";
import { useUpdateLinkMutation } from "../app/apiSlice";

function EditLinkForm({ linkToEdit, isSubmitted }) {
  const [submitLink, submitLinkResponse] = useUpdateLinkMutation();
  const [link_id] = useState(linkToEdit.link_id);
  const [link, setLink] = useState(linkToEdit.link);
  const [name, setName] = useState(linkToEdit.name);
  const [counter] = useState(linkToEdit.counter);
  const [locked, setLocked] = useState(linkToEdit.locked);
  const [hidden, setHidden] = useState("");
  const [hideClass, setHideClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLink({ link_id, name, link, counter, locked });
  };
  useEffect(() => {
    if (submitLinkResponse.isSuccess) {
      isSubmitted();
    }
  }, [submitLinkResponse.isSuccess]);

  const handleLinkChange = (event) => {
    const data = event.target.value;
    setLink(data);
  };

  const handleNameChange = (event) => {
    const data = event.target.value;
    setName(data);
  };

  const handleLockedChange = () => {
    setLocked((prev) => !prev);
  };

  useEffect(() => {
    if (!locked) {
      setHidden("Visible");
      setHideClass("btn btn-secondary");
    } else {
      setHidden("Invisible");
      setHideClass("btn btn-outline-secondary");
    }
  });

  return (
    <div>
      <p>Edit Link</p>
      <form onSubmit={handleSubmit} id="review-form">
        <div>
          <input
            onChange={handleNameChange}
            placeholder="Name"
            name="name"
            id="name"
            value={name}
          ></input>
        </div>
        <div>
          <input
            onChange={handleLinkChange}
            placeholder="Copy & paste URL here"
            name="link"
            id="link"
            type="url"
            value={link}
          ></input>
        </div>

        <div>
          <button
            type="button"
            className={hideClass}
            onClick={handleLockedChange}
            value={locked}
          >
            {hidden}
          </button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditLinkForm;
