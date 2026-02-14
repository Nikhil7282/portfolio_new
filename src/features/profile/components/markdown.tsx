import { MarkdownAsync } from "react-markdown";

export function Markdown(props: React.ComponentProps<typeof MarkdownAsync>) {
  return <MarkdownAsync {...props} />;
}
