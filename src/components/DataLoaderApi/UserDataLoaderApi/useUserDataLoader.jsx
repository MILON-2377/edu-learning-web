import useSecureAxios from "@/components/Hooks/Apis/PublicApi/SecureApi/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

export default function useUserDataLoader(email) {
  const secureApi = useSecureAxios();

  const fetchData = async (email) => {
    const res = await secureApi.get(`/users?email=${email}`);
    return res.data;
  };

  return useQuery({
    queryKey: ["userData", email],
    queryFn: () => fetchData(email),
    enabled: !!email,
  });
}
