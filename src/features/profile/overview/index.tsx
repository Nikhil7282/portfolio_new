import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email_item";
import { IntroItem } from "./intro_item";
import { JobItem } from "./job_item";
import { PhoneItem } from "./phone_item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={GlobeIcon}
          content={`${USER.firstName} ${USER.lastName}`}
          href={USER.website}
        />

        <IntroItem
          icon={USER.gender === "male" ? MarsIcon : VenusIcon}
          content={USER.pronouns}
        />
      </PanelContent>
    </Panel>
  );
}
