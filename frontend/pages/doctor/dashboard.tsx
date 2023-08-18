import Content from "@/components/Content";
import DoctorHeader from "@/components/DoctorHeader";
import ResolvedCards from "@/components/ResolvedCards";

const Dashboard = () => {
  return (
    <div>
      <DoctorHeader />
      <div className="flex flex-col md:flex-row gap-5 justify-between p-5">
        <ResolvedCards />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
