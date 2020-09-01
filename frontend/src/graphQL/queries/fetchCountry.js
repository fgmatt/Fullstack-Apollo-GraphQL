const FETCH_COUNTRY = `query FetchCountry($name: String) {
    countries(where: {name: {eq: $name}}) {
      name
      population
      capital {
        name
      }
      continent {
        name
      }
    }
  }`

export default FETCH_COUNTRY;
  