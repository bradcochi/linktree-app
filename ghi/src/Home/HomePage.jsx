import LinkForm from "./LinkForm";
import LinksPreview from "./LinksPreview";
import { useGetAccountQuery, useGetLinksByUserIdQuery } from "../app/apiSlice";
import EditLinkCard from "./EditLinkCard";
import LandingPage from "./LandingPage";

const HomePage = () => {
  const { data: account } = useGetAccountQuery();
  const { data: links, isLoading: linksLoading } = useGetLinksByUserIdQuery();

  if (!account) {
    return <LandingPage account={account}></LandingPage>;
  }
  if (linksLoading) {
    return <div></div>;
  }

  return (
    <div>
      <div>
        <div>
          <LinkForm></LinkForm>
        </div>
        <div>
          {links?.map((link) => {
            return (
              <div key={link.link_id}>
                <EditLinkCard linkToEdit={link}></EditLinkCard>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <LinksPreview></LinksPreview>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
