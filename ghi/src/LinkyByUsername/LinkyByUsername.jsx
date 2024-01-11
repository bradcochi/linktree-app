import { useEffect } from "react";
import "react-router-dom";
import { useParams, Link } from "react-router-dom";
import {
  useGetLinksByUsernameQuery,
  useIncrementCounterMutation,
  useUpdateTreeMutation,
  useGetAccountQuery,
} from "../app/apiSlice";

const LinkyByUsername = () => {
  let { username } = useParams();

  const { data: links, isLoading: linksLoading } =
    useGetLinksByUsernameQuery(username);
  const { data: account, isLoading: accountLoading } = useGetAccountQuery();
  const [updateLink] = useIncrementCounterMutation();
  const [updateTree] = useUpdateTreeMutation();

  useEffect(() => {
    if (account == null || account.username !== username) {
      updateTree({ username });
    }
  }, [account, updateTree, username]);

  if (linksLoading && accountLoading) {
    return <div></div>;
  }
  if (!links) {
    return <div>Uh-oh! That user does not exist</div>;
  }

  const updateCounter = (link_id, newCount) => {
    let counter = newCount + 1;
    updateLink({ link_id, counter });
  };

  return (
    <>
      <div>
        <div>
          <div>
            <h2>@{username}</h2>
          </div>
          <table>
            <tbody>
              {links.map((link) => {
                if (!link.locked) {
                  return (
                    <tr key={link.link_id}>
                      <td>
                        <div
                          style={{
                            width: "30rem",
                          }}
                        >
                          <div>
                            <div>
                              <Link
                                to={link.link}
                                target="_blank"
                                onClick={() => {
                                  updateCounter(link.link_id, link.counter);
                                }}
                              >
                                {link.name}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LinkyByUsername;
