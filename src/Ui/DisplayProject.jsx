import Button from "./Button";
import CustomButton from "./CustomButton"
import GitHubButton from "./GitHubButton";

function DisplayProject({ project }) {
    const{tittle , descriptio , tech_stack , deployment_link , github_link , type , image} = project
  return (
    <div className="h-[60dvh] w-3/12 sm:w-5/12 md:w-5/12 lg:w-80 bg-page2_color rounded-xl overflow-hidden">
      <div className="h-1/2 w-full ">
        <img src={image} alt="" className="object-contain" />
      </div>
      <div className="h-1/6 w-full  grid place-content-center">
        <p className="text-orange_text text-xl">{tittle}</p>
      </div>
      <div className="my-1">
        {tech_stack}
      </div>
      <div className="flex align-middle justify-around items-center mt-5">
       <CustomButton type="small" link={deployment_link}>
        Link
       </CustomButton>
       <GitHubButton link={github_link}>
            GitHub
       </GitHubButton>
      </div>
    </div>
  );
}

export default DisplayProject;
