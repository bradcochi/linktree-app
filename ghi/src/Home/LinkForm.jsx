import React, { useState, useEffect } from "react";
import { useAddLinkMutation } from "../app/apiSlice";

function LinkForm() {
  const [submitLink, submitLinkResponse] = useAddLinkMutation();
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLink({ name, link });
  };
  useEffect(() => {
    if (submitLinkResponse.isSuccess) {
      setLink("");
      setName("");
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

  let isDisabled = false;
  if (typeof rating == "string") {
    isDisabled = true;
  }

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <p>Enter Link</p>
                <form onSubmit={handleSubmit} id="review-form">
                  <div>
                    <input
                      onChange={handleNameChange}
                      placeholder="Name"
                      name="review"
                      id="review"
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
                    <button disabled={isDisabled}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkForm;
