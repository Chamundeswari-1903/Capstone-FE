import { useState } from "react";
import Icon from "@/components/ui/Icon";

const Accordion1 = ({ className = "space-y-5" }) => {
  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className={className}>
      <div className="accordion shadow-base dark:shadow-none rounded-md">
        <div
          className={`flex justify-between cursor-pointer transition duration-150 font-medium w-full text-start text-base text-slate-600 dark:text-slate-300 px-8 py-4 ${
            active
              ? "bg-slate-50 dark:bg-slate-700 dark:bg-opacity-60 rounded-t-md "
              : "bg-white dark:bg-slate-700  rounded-md"
          }`}
          onClick={toggleAccordion}
        >
          <span> Doctor Details</span>
          <span
            className={`text-slate-900 dark:text-white text-[22px] transition-all duration-300 h-5 ${
              active ? "rotate-180 transform" : ""
            }`}
          >
            <Icon icon="heroicons-outline:chevron-down" />
          </span>
        </div>

        {active && (
          <div
            className={`dark:border dark:border-slate-700 dark:border-t-0 text-sm text-slate-600 font-normal bg-white dark-bg-slate-900 dark:text-slate-300 rounded-b-md`}
          >
            <div className="px-8 py-4">
                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Reffering doctor's</p>
               <p>Referring doctor's name : </p>
               <p>Referring doctor's clinic/address :</p>
                <p>Phone:</p>
                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>General doctor's</p>
                <p>Regular GP's name :</p>
                <p>Regular GP's clinic/address :</p>
                <p>Phone :</p>
                <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Physiotherapist's</p>
                <p>Physiotherapist's name :</p>
                <p>Physiotherapist's clinic/address :</p>
                <p>Phone :</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion1;
