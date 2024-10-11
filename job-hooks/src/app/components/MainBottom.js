import { Statistic } from "antd";

export default function MainBottom() {
  return (
    <div>
      <Statistic className="bg-blue-300 w-fit p-4 rounded-lg font-semibold px-6" title="Active Users" value={112893} />
    </div>
  );
}
