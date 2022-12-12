const FIREBASE_DOMAIN =
  "https://homeals-7ccab-default-rtdb.europe-west1.firebasedatabase.app/";

export async function getAllItems() {
  const response = await fetch(`${FIREBASE_DOMAIN}/items.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch items.");
  }

  const allItems = [];

  for (const key in data) {
    const itemObject = {
      id: key,
      ...data[key],
    };
    allItems.push(itemObject);
  }
  console.log("the items:");
  console.log(allItems);
  console.log("fin");
  return allItems;
}

export async function addFood(itemData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/items.json`, {
    method: "POST",
    body: JSON.stringify(itemData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add an item.");
  }

  return null;
}

export async function deleteFood(id) {
  const response = await fetch(`${FIREBASE_DOMAIN}/items/${id}.json`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete an item.");
  }

  return null;
}
