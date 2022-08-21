import { Layout } from "../components/Layout";
import DepannageParPc from "../features/pricing/components/DepannageParPc";
import { Prestations } from "../features/pricing/components/Prestations";

const Tarifs = () => (
  <Layout spacing={20}>
    <DepannageParPc />
    <Prestations />
  </Layout>
);

export default Tarifs;
