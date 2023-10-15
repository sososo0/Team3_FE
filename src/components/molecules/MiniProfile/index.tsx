import CircularProfileImage from "@/components/atoms/CircularProfileImage";
import Link from "next/link";

interface Prop {
  userId: number;
  imageSrc: string | null;
  userName: string;
  size?: "md" | "sm";
}

function MiniProfile({ userId, imageSrc, userName, size = "md" }: Prop): JSX.Element {
  const fontSize = { md: "text-xl", sm: "text-base" };
  return (
    <Link href={`/user_profile/${userId}`} className="inline-flex gap-1 items-center">
      <CircularProfileImage src={imageSrc} styleType={size} />
      <span className={`user-name ${fontSize[size]}`}>{userName}</span>
    </Link>
  );
}

export default MiniProfile;