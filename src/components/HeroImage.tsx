export default function HeroImage(props: { mobile: string; desktop: string }) {
  return (
    <header>
      <div className=" flex  items-center justify-center">
        <img src={props.mobile} className=" w-screen object-cover lg:hidden" />
      </div>
      <img
        src={props.desktop}
        className="hidden max-w-[30rem] object-cover lg:mt-[4.19rem] lg:block xl:mr-[8.13rem]  "
      />
    </header>
  );
}
