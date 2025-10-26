import { DataParcours } from "../../data/DataParcours";
import ParcoursTitle from "./ParcoursTitle";
import ParcoursTimeline from "./ParcoursTimeline";

export default function Parcours() {
  return (
    <section
    id="parcours"
     className="py-24 bg-white dark:bg-[#060010] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <ParcoursTitle />
        <ParcoursTimeline data={DataParcours} />
      </div>
    </section>
  );
}
