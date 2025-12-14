import { ToggleTheme } from "@/components/toggle-theme";
import { About } from "@/features/profile/about";
import { Overview } from "@/features/profile/overview";
import { SocialLinks } from "@/features/profile/social-links";
import { ProfileCover } from "@/features/profile_cover";
import { ProfileHeader } from "@/features/profile_header";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="absolute right-10">
        <ToggleTheme />
      </div>
      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <Separator />
        <Overview />
        <Separator />
        <SocialLinks />
        <Separator />
        <About />
        <Separator />
      </div>
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge overflow-hidden",
        "before:absolute before:-left-[100vw] before:top-0 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]",
        "before:bg-[length:10px_10px]",
        "before:[--pattern-foreground:var(--color-edge)/0.56]",
        className
      )}
    />
  );
}
