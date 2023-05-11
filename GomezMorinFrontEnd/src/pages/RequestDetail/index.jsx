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
      <div className="flex flex-col items-center gap-9 w-full h-full">
        <div className="h-1/6 w-full">
          {/* Display an image title with the "Bandeja de Entrada" title and an image */}
          <ImageTitle
            title={"Detalles de la solicitud"}
            image={ImageTitleImage}
          />
        </div>
        <div className=" grid grid-cols-1 md:grid md:grid-cols-2 w-full">
          {Object.entries(data).map(([key, value]) => {
            return (
              <div className="m-2">
                <Clipboard label={key} textToCopy={value} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RequestDetail;
