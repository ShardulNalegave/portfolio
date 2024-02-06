
export function Anchor(props: {
  href: string,
  children: string,
}) {
  console.log(props);
  return (
    <a href={props.href} className="text-teal-900 underline">
      {props.children}
    </a>
  );
}