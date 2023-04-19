import { verifyJwtToken } from "@/libs/auth";
import { cookies } from "next/headers";

const useAuth = async () => {
  const cookieList = cookies();

  const { value: token } = cookieList.get("token") ?? { value: null };
  const verifiedToken = await verifyJwtToken(token);

  return verifiedToken;
};

export default useAuth;
