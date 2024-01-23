import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Code, Github, Gitlab, Linkedin } from "lucide-react";
import LoginButton from "../components/LoginButton";
import { useGetAccountQuery } from "../app/apiSlice";

const Footer = () => {
  const { data: account } = useGetAccountQuery();

  return (
    <footer className="bg-[rgb(80,34,116)] p-6">
      <div className="bg-white rounded-2xl p-16 flex flex-col gap-4">
        <p className="text-pretty">
          This app was made by Brad Cochi and Sara Margulies using FastAPI,
          React, Redux Toolkit and shadcn/ui
        </p>
        <div className="flex justify-between">
          <div>
            <h4 className="mb-1">Brad</h4>
            <div className="flex gap-2">
              <Button size="icon" asChild>
                <Link to="https://github.com/bradcochi/" target="_blank">
                  <Github size={40} />
                </Link>
              </Button>
              <Button size="icon" asChild>
                <Link to="https://gitlab.com/bradcochi" target="_blank">
                  <Gitlab size={40} />
                </Link>
              </Button>
              <Button size="icon" asChild>
                <Link
                  to="https://www.linkedin.com/in/brad-cochi/"
                  target="_blank"
                >
                  <Linkedin size={40} />
                </Link>
              </Button>
              <Button size="icon" asChild>
                <Link to="https://www.bradcochi.com/" target="_blank">
                  <Code size={40} />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-right mb-1">Sara</h4>
            <div className="flex gap-2">
              <Button size="icon" asChild>
                <Link to="https://github.com/saramargulies" target="_blank">
                  <Github size={40} />
                </Link>
              </Button>
              <Button size="icon" asChild>
                <Link to="https://gitlab.com/saramargs" target="_blank">
                  <Gitlab size={40} />
                </Link>
              </Button>
              <Button size="icon" asChild>
                <Link
                  to="https://www.linkedin.com/in/sara-margulies/"
                  target="_blank"
                >
                  <Linkedin size={40} />
                </Link>
              </Button>
              <Button size="icon" asChild>
                <Link to="https://www.saramargulies.com/" target="_blank">
                  <Code size={40} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {!account && (
            <>
              <LoginButton />
              <Button
                size="rounded"
                asChild
                className="bg-[rgb(210,232,35)] hover:bg-[rgb(205,224,38)] text-primary"
              >
                <NavLink to="signup">Get started for free</NavLink>
              </Button>
            </>
          )}

          <Button size="rounded" className="p-3">
            <Github size={40} className="mr-2" />
            Linky GitHub Repository
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
