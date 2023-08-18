import AmbulanceDriverContent from "@/components/AmbulanceDriverContent";
import AmbulanceHeader from "@/components/AmbulanceHeader";
import ResolvedCardsDriver from "@/components/ResolvedCardsDriver";
import { useAuth } from "@/context";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);
  return (
    <div>
      <AmbulanceHeader />
      <div className="flex flex-col md:flex-row gap-5 justify-between p-5">
        <ResolvedCardsDriver />
        <AmbulanceDriverContent />
      </div>
    </div>
  );
};

export default Dashboard;
