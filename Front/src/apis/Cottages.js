export async function getPopularCottage() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND}cottage/getPopular`
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getNewCottage() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND}cottage/getNew`
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getBestCottage() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND}cottage/getBest`
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export async function getCottageById(_id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND}cottage/getDetailsById`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.log(e);
  }
}
