import { useQuery } from "@tanstack/react-query";
import FileService from "../services/file.service";

const useBuffer = ({ fileId }) => {
  const getFile = async (id) => {
    if (!id) return null;
    const { data } = await FileService.get(id);
    return data;
  };
  const { data: media } = useQuery({
    queryKey: ["media", { fileId }],
    queryFn: () => getFile(fileId),
  });
  return { media };
};

export default useBuffer;
