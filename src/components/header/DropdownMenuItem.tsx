export default function DropdownMenuItem(props: {
  image: string;
  item: string;
}) {
  const { image, item } = props;
  return (
    <div className=" flex gap-2">
      <img src={image} />
      <p>{item}</p>
    </div>
  );
}
