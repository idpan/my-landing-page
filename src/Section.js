export default function Section(props) {
  return (
    <section
      id={props.id}
      className="section inline-block lg:block border relative z-[50]  w-screen h-screen lg:px-[100px]"
    >
      <div className=" grid lg:block top-[200px] md:top-[400px] lg:top-0 relative w-screen items-center justify-items-center ">
        <picture className="   absolute lg:top-[100px] lg:left-[100px]">
          <source media="(min-width :768px)" srcSet={props.deskImage} />
          <img src={props.image} alt="" className={` ${props.imgClass} `} />
        </picture>
        <div
          className={`${props.titleClass} w-fit h-fit  absolute lg:w-full pb-[50px] lg:pb-0 lg:max-w-[1350px] lg:left-[200px] lg:top-[250px] `}
        >
          <h2
            className={`   lg:w-[1100px] lg:block uppercase font-black md:text-[80px] text-[48px] lg:text-[200px]
              lg:leading-[200px] lg:indent-[-200px]  `}
          >
            {props.title}
          </h2>
        </div>
      </div>
      <div className="border   absolute left-0 lg:left-[500px] right-0 bottom-[20px] top-[350px] ">
        {props.children}
      </div>
    </section>
  );
}
