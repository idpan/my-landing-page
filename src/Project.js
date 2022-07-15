import { ReactComponent as GithubLogo } from "./images/icon_github.svg";
export default function Project(props) {
  return (
    <div className="mb-[50px] lg:mb-0 ">
      <div className="bg-slate-200 mx-auto w-full max-w-[300px]  lg:w-[350px]   ">
        <img src={props.image} alt="" loading="lazy" className=" " />
      </div>
      <div className="flex justify-between pt-4 gap-4 font-bold items-start  ">
        <p>{props.title} contoh project </p>
        <div className="flex items-center gap-[10px] hover:[&_a]:cursor-pointer ">
          <a href={props.githubUrl}>
            <GithubLogo className="w-[24px]" />
          </a>
          <a
            href={props.liveSiteUrl}
            className="bg-[#FCCF08] p-2 text-[11px] whitespace-nowrap text-black rounded-md "
          >
            live site
          </a>
        </div>
      </div>
    </div>
  );
}
