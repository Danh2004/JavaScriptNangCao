const companies = [
    { id:1, name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { id:2, name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { id:3, name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { id:4, name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { id:5, name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { id:6, name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { id:7, name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { id:8, name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { id:9, name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];


// Filter
  // loai company start 1981
  const companyFilter = companies.filter((company) => {
    //return dk
    return company.start !== 1981;
  });

  //removedProductById (id) /id =5
  function removedProductById(id){
    return companies.filter((company) =>{
        return company.id !== id
    
    });
}

//Reduce
//for total = + item.price * solyong
// Shopping cart example (objects)
const cart = [
    { id: 1, name: 'Product 1', price: 130 ,soluong: 3 },
    { id: 2, name: 'Product 2', price: 150 ,soluong: 3},
    { id: 3, name: 'Product 3', price: 200 ,soluong: 3},
  ];
  const total = cart.reduce((total, product) => {
    console.log({total,product});
    return total + product.price * product.soluong ;
  }, 0);