import { Markdown } from "@/features/profile/components/markdown";
import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="prose prose-neutral dark:prose-invert">
          <Markdown>{USER.about}</Markdown>
        </div>
      </PanelContent>
    </Panel>
  );
}
