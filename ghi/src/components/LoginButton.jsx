import { Button } from "./ui/Button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";
import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../app/apiSlice";
import { useNavigate } from "react-router-dom";
import AlertError from "../Global/AlertError";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";

export default function LoginButton() {
  const navigate = useNavigate();
  const [login, loginResult] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loginResult.error) {
      setErrorMessage("Incorrect username or password");
    }
    if (loginResult.isSuccess) {
      navigate("/");
    }
  }, [loginResult, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ password, username });
    navigate("/");
    setOpen(false);
  };

  const handleUsernameChange = (event) => {
    const data = event.target.value;
    setUsername(data);
  };

  const handlePasswordChange = (event) => {
    const data = event.target.value;
    setPassword(data);
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg" onClick={() => setOpen(true)}>
          Log in
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>
        </DialogHeader>
        <div>
          {errorMessage && <AlertError>{errorMessage}</AlertError>}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value={username}
                className="col-span-3"
                onChange={handleUsernameChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                className="col-span-3"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Log in</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
