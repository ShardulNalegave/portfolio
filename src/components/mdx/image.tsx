
export function Image(props: any) {
  return (
    <img src={props.src} alt={props.alt} className="block rounded-lg w-full lg:w-[60%] my-[25px]" />
  );
}