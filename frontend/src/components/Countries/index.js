import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_COUNTRY, USERFINDBYID } from "../../graphQL/queries";
import { rHome, rMiscelleanous } from "../RoutesName";
import { SearchInput } from "../Elements/Inputs";
import BlockingMessage from "../Blocking";

const Countries = () => {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");
  const userIdToken = sessionStorage.getItem("token");

  const userfindById = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession, token: userIdToken },
  });

  if (userfindById.error) {
    history.push(rHome);
  }

  let [isBlocking, setIsBlocking] = useState(false);
  let [isClickSearch, setIsClickSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const useFetch = (url, init, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(url, init, options);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, [init]);
    return { response, error, isLoading };
  };

  const url =
    "https://api.everbase.co/graphql?7d253fec-c706-4c4a-a7a8-26b6e3e9bf03";
  const init = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: FETCH_COUNTRY,
      variables: { name: searchTerm },
    }),
  };

  const res = useFetch(url, init, {});

  function handleChangeSearch(event) {
    setSearch(event.target.value);
    setIsBlocking(true);
  }

  function handleKeyDownSearch(event) {
    if (event.key === "Enter") {
      setIsClickSearch(true);
      setSearchTerm(event.target.value);
    }
  }

  function handleLink() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
  }

  return (
    <div>
      <div className="header_usp">
        <BlockingMessage when={isBlocking} />
        <h1>Länder</h1>
        <div>
          <p className="logout">
            <Link to={rHome} onClick={handleLink}>
              Logout
            </Link>
          </p>
        </div>
      </div>
      <SearchInput
        value={search}
        onChange={(e) => handleChangeSearch(e)}
        onKeyDown={(e) => handleKeyDownSearch(e)}
        tI={0}
      />
      <div>
        {res.response !== null ? (
          res.response.data.countries.length !== 0 ? (
            <div>{res.response.data.countries[0].name}</div>
          ) : null
        ) : null}
        {res.response !== null ? (
          res.response.data.countries.length !== 0 ? (
            <div>{res.response.data.countries[0].population}</div>
          ) : null
        ) : null}
        {res.response !== null ? (
          res.response.data.countries.length !== 0 ? (
            <div>{res.response.data.countries[0].capital.name}</div>
          ) : null
        ) : null}
        {res.response !== null ? (
          res.response.data.countries.length !== 0 ? (
            <div>{res.response.data.countries[0].continent.name}</div>
          ) : null
        ) : null}
      </div>
      <div>
        <p className="back">
          <Link to={rMiscelleanous}>Zurück</Link>
        </p>
      </div>
    </div>
  );
};

export default Countries;
