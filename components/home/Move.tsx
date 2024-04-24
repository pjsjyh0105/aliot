import { useRouter } from "next/router";
import { useEffect } from "react";

const Move = ({ geturl }: { geturl: string }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(geturl);
  }, [router]);
};
export default Move;
