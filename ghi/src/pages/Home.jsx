import LinkForm from "../Home/LinkForm";
import LinksPreview from "../Home/LinksPreview";
import { useGetAccountQuery, useGetLinksByUserIdQuery } from "../app/apiSlice";
import EditLinkCard from "../Home/EditLinkCard";
import Landing from "./Landing";
import { InfoIcon } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { toast } from "sonner";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const { data: account } = useGetAccountQuery();
  const { data: links, isLoading: linksLoading } = useGetLinksByUserIdQuery();

  if (!account) {
    return <Landing account={account}></Landing>;
  }
  if (linksLoading) {
    return null;
  }

  return (
    <div className="pt-[calc(var(--header-padding)*2+var(--header-height))] px-6 pb-36">
      <div className="py-3 px-4 text-sm shadow-inner-bottom-light md:mx-4 md:rounded-lg md:mt-2 md:flex-row flex items-center bg-info-alt justify-between">
        <div className="flex gap-4 items-center">
          <InfoIcon size={16} />
          <div>
            Your Linky is live:{" "}
            <NavLink to={`/${account.username}`}>
              {`${window.location.href}${account.username}`}
            </NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          Share your Linktree to your socials
          <Button
            size="rounded-small"
            variant="white"
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.href}${account.username}`
              );
              toast.success("Copied to clipboard!");
            }}
          >
            Copy URL
          </Button>
        </div>
      </div>
    </div>

    // <div>
    //   <div>
    //     <div>
    //       <LinkForm></LinkForm>
    //     </div>
    //     <div>
    //       {links?.map((link) => {
    //         return (
    //           <div key={link.link_id}>
    //             <EditLinkCard linkToEdit={link}></EditLinkCard>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <LinksPreview></LinksPreview>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
