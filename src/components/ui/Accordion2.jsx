import { useState } from "react";
import Icon from "@/components/ui/Icon";

const Accordion2 = ({ className = "space-y-5" }) => {
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
          <span>Insurance Details</span>
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
            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Worker's Compensation</p>
            <p>Claim Number :</p>
            <p>Date of Injury :</p>
            <p>Your workplace/ company name :</p>
            <p>Address of your workplace :</p>
            <p>Contact person at your workplace :</p>
            <p>Surname:</p>
            <p>Phone :</p>
            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Workvover Insurance</p>
            <p>Insurance company name :</p>
            <p>Insurance company address :</p>
            <p>Insurance company Case manager :</p>
            <p>Surname</p>
            <p>Phone :</p>
            <p>Case manager's email address :</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion2;
