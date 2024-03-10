import { ReactNode } from "react";

export default function StyledLink(props: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={props.href} target="_blank" rel="nofollow">
      {props.children}
    </a>
  );
}
