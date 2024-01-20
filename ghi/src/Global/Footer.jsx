import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Code, Github, Gitlab, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(80,34,116)] p-6">
      <div className="bg-white rounded-2xl p-16">
        <div className="flex justify-between">
          <div>
            <h4>Brad</h4>
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
            <h4 className="text-right">Sara</h4>
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
                <Link to="https://github.com/saramargulies" target="_blank">
                  <Code size={40} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h5>Linky</h5>
          <p>
            This app was made by Brad Cochi and Sara Margulies using FastAPI,
            React, and Redux Toolkit
          </p>
        </div>
        <div>
          <h5>Project Information</h5>
          <ul>
            <li>
              <a href="#!">Frequently Asked Questions</a>
            </li>
            <li>
              Brad Cochi's{" "}
              <Link
                to="https://www.linkedin.com/in/brad-cochi/"
                target="_blank"
              >
                LinkedIn
              </Link>{" "}
              |{" "}
              <Link to="https://www.bradcochi.com/" target="_blank">
                Portfolio
              </Link>{" "}
              | |{" "}
              <Link to="https://gitlab.com/bradcochi" target="_blank">
                Gitlab
              </Link>
            </li>
            <li>
              Sara Margulies's{" "}
              <Link
                to="https://www.linkedin.com/in/sara-margulies/"
                target="_blank"
              >
                LinkedIn
              </Link>{" "}
              | <Link to="#!">Portfolio</Link> |{" "}
              <Link to="https://github.com/saramargulies" target="_blank">
                Github
              </Link>{" "}
              |{" "}
              <Link to="https://gitlab.com/saramargs" target="_blank">
                Gitlab
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Repository</h5>
          <div>
            <a
              href="https://github.com/bradcochi/linktree-app"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
