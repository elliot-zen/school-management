import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

export default function AdminPage() {
    return (
        <div className="p-4 flex flex-col gap-4 md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="students" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* MIDDLE CHARTS */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]"></div>
                </div>
                {/* BOTTOM CHARTS */}
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3">r</div>
        </div>
    );
}