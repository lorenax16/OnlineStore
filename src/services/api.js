export async function getCategories() {
  try {
    const recive = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categorias = await recive.json();
    // console.log(categorias);
    return categorias;
  } catch (error) {
    console.log('erro');
  }
}
getCategories();

export async function getProductsFromCategoryAndQuery(categoriaID, palavra) {
  try {
    const recive = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoriaID}&q=${palavra}`);
    const categoriasID = await recive.json();
    // console.log(categoriasID);
    return categoriasID;
  } catch (error) {
    console.log('erro2');
  }
}

export async function getProductsCategory(CATEGORY_ID) {
  try {
    const recive = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}`);
    const categoriasID = await recive.json();
    // console.log(categoriasID);
    return categoriasID;
  } catch (error) {
    console.log('erro2');
  }
}

export async function getProductsId(ID) {
  try {
    const recive = await fetch(`https://api.mercadolibre.com/items/${ID}`);
    const produtoID = await recive.json();
    // console.log(produtoID);
    return produtoID;
  } catch (error) {
    console.log('erro3');
  }
}

// getProductsFromCategoryAndQuery('MLB5672');
