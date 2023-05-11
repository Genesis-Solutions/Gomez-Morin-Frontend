import ImageTitle from "../../components/ImageTitle";
import ImageTitleImage from "../../../public/images/ImageTitleImage.png";
import Clipboard from "../../components/Clipboard";
import { useParams } from "react-router-dom";

const RequestDetail = () => {
  const { idForm, userId } = useParams();

  return (
    <>
      <div className="flex flex-col items-center gap-9 w-full h-full">
        <div className="h-1/6 w-full">
          {/* Display an image title with the "Bandeja de Entrada" title and an image */}
          <ImageTitle
            title={"Detalles de la solicitud"}
            image={ImageTitleImage}
          />
        </div>
        <div className=" grid grid-cols-1 md:grid md:grid-cols-2 w-full">
          <div className="m-2">
            <Clipboard
              label={"Email/Sitio del Evento: "}
              textToCopy={"socialNetwork"}
            />
          </div>
          <div className="m-2">
            <Clipboard
              label={"Email/Sitio del Evento: "}
              textToCopy={"socialNetwork"}
            />
          </div>
          <div className="m-2">
            <Clipboard
              label={"Email/Sitio del Evento: "}
              textToCopy={"socialNetwork"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetail;
