export default function ClientImage(props: { imageSrc: string }) {
  return (
    <>
      <img
        src={props.imageSrc}
        className=" max-h-[0.9rem] max-w-[5.1rem] sm:max-h-none sm:max-w-none  "
      />
    </>
  );
}
