import ImageTitle from "../../components/ImageTitle";
import ImageTitleImage from "../../../public/images/ImageTitleImage.png";
import Clipboard from "../../components/Clipboard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getRequestDetailed,
  getDocuments,
} from "../../queries/queryRequestDetail";
import DownloadInput from "../../components/DownloadInput";

const RequestDetail = () => {
  const [data, setData] = useState({});
  const { idForm, userId } = useParams();
  const [document, setDocument] = useState();
  useEffect(() => {
    getRequestDetailed(userId, idForm).then((res) => {
      setData(res);
    });
  }, []);

  const getDoc = (doc) => {
    getDocuments(doc).then((res) => {
      const blob = new Blob([res], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      // Download the file
      window.open(url);
      //
      setDocument(url);
    });
  };

  return (
    <div
      className={
        !data.membretatedLetterDoc
          ? "flex flex-col items-center gap-9 w-full mb-6"
          : "flex flex-col items-center gap-9 h-full w-full mb-6"
      }
    >
      <div className="w-full">
        {/* Display an image title with the "Bandeja de Entrada" title and an image */}
        <ImageTitle
          title={"Detalles de la solicitud"}
          image={ImageTitleImage}
        />
      </div>
      <div className="px-6 grid grid-cols-1 md:grid md:grid-cols-2 gap-6 w-full ">
        {!data.membretatedLetterDoc && (
          <>
            <Clipboard
              label="Nombre del solicitante"
              textToCopy={data.nameRequester}
            />
            <Clipboard
              label="Celular del solicitante"
              textToCopy={data.cellphone}
            />
            <Clipboard label="Teléfono fijo" textToCopy={data.telephone} />
            <Clipboard label="Correo electrónico" textToCopy={data.email} />
            <Clipboard
              label="Fecha de solicitud"
              textToCopy={data.requestDate}
            />
            <Clipboard label="Nombre del evento" textToCopy={data.nameEvent} />
            <Clipboard
              label="Descripción del evento"
              textToCopy={data.specificDescription}
            />
            <Clipboard label="Tipo de evento" textToCopy={data.typeEvent} />
            <Clipboard label="Dirigido a" textToCopy={data.targetAudience} />
            {data.fee ? (
              <Clipboard label="Cuota" textToCopy={data.cost} />
            ) : null}
            <Clipboard label="Redes sociales" textToCopy={data.socialNetwork} />
            <Clipboard
              label="Fecha de inicio del evento"
              textToCopy={data.startDay}
            />
            <Clipboard
              label="Fecha de fin del evento"
              textToCopy={data.endDay}
            />
            <Clipboard
              label="Hora de inicio del evento"
              textToCopy={data.startTime}
            />
            <Clipboard
              label="Hora de fin del evento"
              textToCopy={data.endTime}
            />
            <Clipboard label="Días del evento" textToCopy={data.weekDays} />
            {data.assistance ? (
              <Clipboard label="Personas" textToCopy={data.assistance} />
            ) : null}
            <Clipboard label="Estatus del evento" textToCopy={data.status} />
            <Clipboard label="Folio" textToCopy={data.folio} />
            {data.ages ? (
              <Clipboard label="Edades" textToCopy={data.ages} />
            ) : null}
            <Clipboard label="Dirección" textToCopy={data.direction} />
            <Clipboard label="Código Postal" textToCopy={data.postalCode} />
            <Clipboard label="Calle" textToCopy={data.street} />
            <Clipboard label="Colonia" textToCopy={data.colony} />

            <Clipboard label="Tipo de público" textToCopy={data.publicType} />

            {data.requiredSpace ? (
              <Clipboard
                label="Espacio requerido"
                textToCopy={data.requiredSpace}
              />
            ) : null}
            <Clipboard label="Número de sillas" textToCopy={data.chairNumber} />
            {data.authorities ? (
              <Clipboard
                label="¿Tiene inauguración?"
                textToCopy="Cuenta con inauguración"
              />
            ) : (
              <Clipboard
                label="¿Tiene inauguración?"
                textToCopy="No cuenta con inauguración"
              />
            )}
            {data.authorities ? (
              <Clipboard
                label="Autoridades que estarán presentes"
                textToCopy={data.authorities}
              />
            ) : null}
            {data.equipment ? (
              <Clipboard label="Equipo necesario" textToCopy={data.equipment} />
            ) : null}
            {data.selfEquipment ? (
              <Clipboard
                label="Equipo personal para el evento"
                textToCopy={data.selfEquipment}
              />
            ) : null}
            {data.softInstallation ? (
              <Clipboard
                label="¿Necesitará instalación de software?"
                textToCopy="Sí"
              />
            ) : (
              <Clipboard
                label="¿Necesitará instalación de software?"
                textToCopy="No"
              />
            )}
            {data.electricInstallation ? (
              <Clipboard
                label="Instalacion eléctrica"
                textToCopy={data.electricInstallation}
              />
            ) : null}
            {data.mounting ? (
              <Clipboard label="Tipo de montaje" textToCopy={data.mounting} />
            ) : null}
            {data.tableNumber ? (
              <Clipboard
                label="Número de mesas"
                textToCopy={data.tableNumber}
              />
            ) : null}
            {data.ineDoc && (
              <DownloadInput
                label="INE"
                text="INE"
                action={() => {
                  getDoc(data.ineDoc);
                }}
              />
            )}
            {data.addressDoc && (
              <DownloadInput
                label="Comprobante de domicilio"
                text="Comprobante de domicilio"
                action={() => {
                  getDoc(data.addressDoc);
                }}
              />
            )}
            {data.curpDoc && (
              <DownloadInput
                label="CURP"
                text="CURP"
                action={() => {
                  getDoc(data.curpDoc);
                }}
              />
            )}
            {data.extraDoc && (
              <DownloadInput
                label="Documento extra"
                text="Documento extra"
                action={() => {
                  getDoc(data.extraDoc);
                }}
              />
            )}
          </>
        )}

        {data.membretatedLetterDoc && (
          <DownloadInput
            className=""
            label="Carta membretada"
            text="Carta membretada"
            action={() => {
              getDoc(data.membretatedLetterDoc);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RequestDetail;
