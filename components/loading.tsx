import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-full grid place-items-center">
      <Loader className="animate-spin" size="20px" />
    </div>
  );
}
