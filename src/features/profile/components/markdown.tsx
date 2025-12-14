import { MarkdownAsync } from "react-markdown";

export function Markdown(props: React.ComponentProps<typeof MarkdownAsync>) {
  return (
    <MarkdownAsync
      // remarkPlugins={[remarkGfm]}
      // rehypePlugins={[
      //   rehypeRaw,
      //   [
      //     rehypeExternalLinks,
      //     { target: "_blank", rel: "nofollow noopener noreferrer" },
      //   ],
      //   [rehypeAddQueryParams, UTM_PARAMS],
      // ]}
      {...props}
    />
  );
}
