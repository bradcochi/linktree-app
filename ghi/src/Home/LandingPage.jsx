import IPhoneGraphic from "../components/IPhoneGraphic";

const LandingPage = ({ account }) => {
  return (
    <div className="bg-[rgb(37,79,26)] pt-[calc(var(--header-padding)*2+var(--header-height))] px-6 pb-36">
      <div className="flex">
        <div>
          <h1 className="text-[#D2E823] font-[820] text-[clamp(32px,8.5vmin,88px)] tracking-tight text-left">
            Everything you are. In one, simple link in bio.
          </h1>

          <p className="text-[#D2E823] mt-[8px]">
            Join 40M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
        </div>
        <div>
          <IPhoneGraphic />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
