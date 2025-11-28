import { Tab, TabPanel, TabList, Tabs } from "react-tabs";
import formatText from "../../lib/utils/formatText";
import { tabs } from "../../data";

const AboutPage = () => {
  return (
    <div className="bg-base-100 p-12 rounded-xl">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-base opacity-80 leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle.
          <br />
          From personal packages to business shipments — we deliver on time,
          every time.
        </p>
      </div>

      <div className="divider my-8" />

      <Tabs className="space-y-6">
        <TabList className="tabs tabs-border">
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              className="tab text-lg font-semibold data-[selected]:tab-active focus:outline-none"
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <div className="px-4">
          {tabs.map((tab) => (
            <TabPanel key={tab.title}>
              <div className="rounded-xl space-y-3">
                <h2 className="text-3xl font-bold">{tab.title}</h2>
                <p className="text-lg opacity-80 leading-relaxed">
                  {formatText(tab.content)}
                </p>
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default AboutPage;
