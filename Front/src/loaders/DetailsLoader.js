import { getCottageById } from "../apis/Cottages";

export async function DetailsLoader(_id) {
  let Cottage = await getCottageById(_id);
  return Cottage;
}
