interface Props {
  text: string;
}

export function Example({ text }: Props) {
  return <p className="text-2xl text-sky-600">{text}</p>;
}
