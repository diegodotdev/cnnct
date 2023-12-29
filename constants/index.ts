import { Home, Users, User, Heart } from "lucide-react";

export const LEFTBAR_LINKS = [
  { id: 1, title: "Home", href: "/", icon: Home },
  { id: 2, title: "People", href: "/u", icon: Users },
];

export const SIGNED_IN_LINKS = [
  { id: 1, title: "Likes", href: "/likes", icon: Heart },
  { id: 2, title: "Profile", href: "/profile", icon: User },
];
