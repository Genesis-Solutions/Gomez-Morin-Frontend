import ImageTitle from "../../components/ImageTitle";
import ImageTitleImage from "../../../public/images/ImageTitleImage.png";
import Clipboard from "../../components/Clipboard";

const RequestDetail = () => {
  return (
    <div className="flex flex-col items-center gap-9 w-full">
      <div className="h-1/6 w-full">
        <ImageTitle
          title={"Detalles de la solicitud"}
          image={ImageTitleImage}
        />
      </div>
      <div className="flex flex-col justify-center w-full px-3">
        <div className="flex flex-row justify-center w-full px-3">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Folio: "} textToCopy={"folio"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard
              label={"Email/Sitio del Evento: "}
              textToCopy={"socialNetwork"}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3">
          <div className=" w-1/2 px-3">
            <Clipboard
              label={"Nombre del Solicitante: "}
              textToCopy={"nameRequester"}
            />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard
              label={"Teléfono del Solicitante"}
              textToCopy={"cellphone"}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Correo Electrónico: "} textToCopy={"email"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard label={"Fecha del Oficio"} textToCopy={"requestDate"} />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Nombre del Evento: "} textToCopy={"nameEvent"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard
              label={"Descripción del Evento: "}
              textToCopy={"specificDescription"}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Tipo de Evento: "} textToCopy={"typeEvent"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard
              label={"Teléfono de Emergencia: "}
              textToCopy={"phoneEmergency"}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Dirigido a: "} textToCopy={"targetAudience"} />
          </div>
          if ("cost"){" "}
          {
            <div className=" w-1/2 px-3">
              <Clipboard label={"Cuota: "} textToCopy={"fee"} />
            </div>
          }
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard
              label={"Fecha de inicio del evento: "}
              textToCopy={"startDay"}
            />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard label={"Fecha fin del evento: "} textToCopy={"endDay"} />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Espacio: "} textToCopy={"requiredSpace"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard
              label={"Número de personas esperado: "}
              textToCopy={"assistance"}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Hora de Inicio: "} textToCopy={"startTime"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard label={"Hora fin: "} textToCopy={"endTime"} />
          </div>
        </div>
        if ("openingDay"){" "}
        {
          <div className="flex flex-row justify-center w-full px-3 pt-6">
            <div className=" w-1/2 px-3">
              <Clipboard
                label={"Día de apertura: "}
                textToCopy={"openingDayDate"}
              />
            </div>
            <div className=" w-1/2 px-3">
              <Clipboard
                label={"Hora de apertura: "}
                textToCopy={"openingDayTime"}
              />
            </div>
          </div>
        }
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Estatus del Evento: "} textToCopy={"status"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard label={"Hora fin: "} textToCopy={"endTime"} />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Dirección del Solicitante: "} textToCopy={"direction"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard label={"C.P. del Solicitante: "} textToCopy={"postalCode"} />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-3 pt-6">
          <div className=" w-1/2 px-3">
            <Clipboard label={"Calle del Solicitante: "} textToCopy={"street"} />
          </div>
          <div className=" w-1/2 px-3">
            <Clipboard label={"Colonia del Solicitante: "} textToCopy={"colony"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetail;
