import ImageTitle from "../../components/ImageTitle";
import ImageTitleImage from "../../../public/images/ImageTitleImage.png";
import Clipboard from "../../components/Clipboard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRequestDetailed } from "../../queries/queryRequestDetail";

const RequestDetail = () => {
  const [data, setData] = useState({});
  const { idForm, userId } = useParams();
  useEffect(() => {
    getRequestDetailed(userId, idForm).then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-9 w-full mb-6">
        <div className="h-1/6 w-full">
          {/* Display an image title with the "Bandeja de Entrada" title and an image */}
          <ImageTitle
            title={"Detalles de la solicitud"}
            image={ImageTitleImage}
          />
        </div>
        <div className="px-6 grid grid-cols-1 md:grid md:grid-cols-2 gap-6 w-full ">
          <Clipboard label="Nombre del solicitante" textToCopy={data.nameRequester} />
          <Clipboard label="Teléfono del solicitante" textToCopy={data.cellphone} />
          <Clipboard label="Teléfono de emergencia" textToCopy={data.phoneEmergency} />
          <Clipboard label="Correo electrónico" textToCopy={data.email} />
          <Clipboard label="Fecha de solicitud" textToCopy={data.requestDate} />
          <Clipboard label="Nombre del evento" textToCopy={data.nameEvent} />
          <Clipboard label="Descripción del evento" textToCopy={data.specificDescription} />
          <Clipboard label="Tipo de evento" textToCopy={data.typeEvent} />
          <Clipboard label="Dirigido a" textToCopy={data.targetAudience} />
          {data.fee ? <Clipboard label="Cuota" textToCopy={data.fee} /> : null}
          <Clipboard label="Redes sociales" textToCopy={data.socialNetwork} />
          <Clipboard label="Fecha de inicio del evento" textToCopy={data.startDay} />
          <Clipboard label="Fecha de fin del evento" textToCopy={data.endDay} />
          <Clipboard label="Hora de inicio del evento" textToCopy={data.startTime} />
          <Clipboard label="Hora de fin del evento" textToCopy={data.endTime} />
          <Clipboard label="Lugar del evento" textToCopy={data.place} />
          {data.assistance ? <Clipboard label="Personas" textToCopy={data.assistance} /> : null}
          <Clipboard label="Estatus del evento" textToCopy={data.status} />
          <Clipboard label="Folio" textToCopy={data.folio} />
          {data.ages ? <Clipboard label="Edades" textToCopy={data.ages} /> : null}
          <Clipboard label="Dirección" textToCopy={data.direction} />
          <Clipboard label="Código Postal" textToCopy={data.postalCode} />
          <Clipboard label="Calle" textToCopy={data.street} />
          <Clipboard label="Colonia" textToCopy={data.colony} />
          {data.publicEvent ? <Clipboard label="Tipo de público" textToCopy="Público" /> : <Clipboard label="Tipo de público" textToCopy="Privado" />}
          {data.requiredSpace ? <Clipboard label="Espacio requerido" textToCopy={data.requiredSpace} /> : null}
          <Clipboard label="Número de sillas" textToCopy={data.chairNumber} />
          {data.inauguration ? <Clipboard label="¿Tiene inauguración?" textToCopy="Cuenta con inauguración" /> : <Clipboard label="¿Tiene inauguración?" textToCopy="No cuenta con inauguración" />}
          {data.authorities ? <Clipboard label="Autoridades que estarán presentes" textToCopy={data.authorities} /> : null}
          {data.equipment ? <Clipboard label="Equipo necesario" textToCopy={data.equipment} /> : null}
          {data.selfEquipment ? <Clipboard label="Equipo personal para el evento" textToCopy={data.selfEquipment} /> : null}
          {data.softInstallation  ? <Clipboard label="¿Necesitará instalación de software?" textToCopy="Sí" /> : <Clipboard label="¿Necesitará instalación de software?" textToCopy="No" />}
          {data.electricInstallation ? <Clipboard label="Instalacion eléctrica" textToCopy={data.electricInstallation} /> : null}
          {data.mounting ? <Clipboard label="Tipo de montaje" textToCopy={data.mounting} /> : null}
          {data.tableNumber ? <Clipboard label="Número de mesas" textToCopy={data.tableNumber} /> : null}
          {data.openingDayDate ? <Clipboard label="Fecha de inauguración" textToCopy={data.openingDayDate} /> : null}
          {data.openingDayTime ? <Clipboard label="Hora de inauguración" textToCopy={data.openingDayTime} /> : null}
          {data.sound  ? <Clipboard label="¿Necesitará instalación de sonido?" textToCopy="Sí" /> : <Clipboard label="¿Necesitará instalación de sonido?" textToCopy="No" />}
          {data.microphone  ? <Clipboard label="¿Necesitará micrófonos?" textToCopy="Sí" /> : <Clipboard label="¿Necesitará micrófonos?" textToCopy="No" />}

        </div>
      </div>
    </>
  );
};

export default RequestDetail;
