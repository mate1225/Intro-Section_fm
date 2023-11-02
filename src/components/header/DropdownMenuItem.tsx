export default function DropdownMenuItem(props: {
  image: string;
  item1: string;
}) {
  const { image, item1 } = props;
  return (
    <>
      <img src={image} />
      <p>{item1}</p>
    </>
  );
}
