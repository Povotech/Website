import dynamic from "next/dynamic";
import { Layout } from "../components/Layout";
import { ContactPanel } from "../features/contact/components/ContactPanel";

const Contact = () => {
  const MapWithNoSsr = dynamic(
    () => import("../features/contact/components/WorkScopeMap"),
    {
      ssr: false,
    }
  );
  return (
    <Layout>
      <ContactPanel />
      <div id="map">
        <MapWithNoSsr />
      </div>
    </Layout>
  );
};

export default Contact;
