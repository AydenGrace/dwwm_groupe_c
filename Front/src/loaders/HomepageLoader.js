import {
  getBestCottage,
  getNewCottage,
  getPopularCottage,
} from "../apis/Cottages";

export async function HomepageLoader() {
  let Cottages = {};
  Cottages.Populars = await getPopularCottage();
  Cottages.News = await getNewCottage();
  Cottages.Bests = await getBestCottage();

  return Cottages;
}
