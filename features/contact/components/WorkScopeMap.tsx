import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Heading, Text, VStack } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

type Latitude = number;
type Longitude = number;
const pvCoords = [41.5893, 9.2807] as [Latitude, Longitude];

const WorkScopeMap: FC = () => (
  <VStack spacing={5}>
    <Heading
      fontSize={{
        base: "4xl",
        md: "5xl",
      }}
    >
      Où nous trouvez ?
    </Heading>
    <Text color={"gray.600"} maxW={"3xl"}>
      Pas besoin de nous chercher ! <br />
      Notre entreprise ne possède pas de boutique ou de bureau. <br />
      En cas de panne, veuillez nous contacter au travers des moyens ci-dessus.
      <br />
      Nous nous déplaçons à votre domicile si cela est nécessaire vous
      n&apos;avez rien à faire !<br />
    </Text>
    <Text
      color={"gray.600"}
      maxW={"3xl"}
      fontWeight="thin"
      fontStyle={"italic"}
    >
      Nous travaillons exclusivement sur la région de Porto-Vecchio au-delà des
      frais de déplacement supplémentaire sont a prévoir si le déplacement est
      indispensable.
    </Text>
    <MapContainer
      center={pvCoords}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={pvCoords}>
        <Popup>
          PovoTech
          <br />
          Région de Porto-Vecchio
        </Popup>
      </Marker>
    </MapContainer>
  </VStack>
);

export default WorkScopeMap;
