import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfileStore } from "@/library/hooks";

export default function MyAvatar() {
  const { profile, getInitials } = useProfileStore();
  return (
    <div>
      <Avatar>
        <AvatarImage src={profile?.avatarUrl} />
        <AvatarFallback>{getInitials()}</AvatarFallback>
      </Avatar>
    </div>
  );
}
