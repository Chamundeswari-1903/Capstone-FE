import React, { Fragment } from "react";
import Accordion from "@/components/ui/Accordion";
import Accordion1 from "@/components/ui/Accordion1";
import Accordion2 from "@/components/ui/Accordion2";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Tab } from "@headlessui/react";

const FaqPage = () => {
  return (
    <div>
      <Tab.Group>
        <div className="grid gap-5 grid-cols-12">
          <div className="xl:col-span-9 lg:col-span-8 col-span-12">
            <Tab.Panels>
              <Tab.Panel>
                <Accordion className="mb-1"/>
                <Accordion1 className="mb-1"/>
                <Accordion2 />
              </Tab.Panel>
             
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
};

export default FaqPage;
