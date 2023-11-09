import Link from 'next/link';

export default function StickyIcon(props) {

  return (
    <a target="_blank" href={props.url}>
          {props.icon}
      </a>
  );
}
