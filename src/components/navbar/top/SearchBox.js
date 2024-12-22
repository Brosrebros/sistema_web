import React, { useState, useEffect } from "react";
import { Form, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";

const SearchBox = ({ autoCompleteItem }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [resultItem, setResultItem] = useState(autoCompleteItem);

  const fuseJsOptions = {
    includeScore: true,
    keys: ["title", "text", "breadCrumbTexts"],
  };

  let searchResult = new Fuse(autoCompleteItem, fuseJsOptions)
    .search(searchInputValue)
    .map((item) => item.item);

  useEffect(() => {
    if (searchInputValue) {
      setResultItem(searchResult);
      setDropdownOpen(searchResult.length > 0);
    } else {
      setResultItem(autoCompleteItem);
      setDropdownOpen(false);
    }
  }, [searchInputValue]);

  const handleVoiceSearch = () => {
    console.log("Voice search activated!");
    // Aquí puedes integrar reconocimiento de voz si lo deseas.
  };

  return (
    <Dropdown
      show={dropdownOpen}
      className="search-box w-100"
      onToggle={() => setDropdownOpen(!dropdownOpen)}
    >
      <Dropdown.Toggle as="div" className="dropdown-caret-none w-100">
      <Form className="position-relative d-flex align-items-center search-container">
  {/* Icono de búsqueda */}
  <FontAwesomeIcon
    icon={faSearch}
    className="text-muted search-icon"
  />

  {/* Campo de entrada */}
  <Form.Control
    type="search"
    placeholder="Buscar..."
    aria-label="Buscar"
    className="search-input"
    value={searchInputValue}
    onChange={({ target }) => setSearchInputValue(target.value)}
  />

  {/* Separador */}
  <div className="separator"></div>

  {/* Icono de micrófono */}
  <FontAwesomeIcon
    icon={faMicrophone}
    className="text-muted microphone-icon"
    onClick={handleVoiceSearch}
  />
</Form>


      </Dropdown.Toggle>
      {/* Resultados del Dropdown */}
      <Dropdown.Menu className="w-100">
        <div className="scrollbar py-3" style={{ maxHeight: "24rem" }}>
          {resultItem.length > 0 ? (
            resultItem.map((item) => (
              <Dropdown.Item as={Link} to={item.url} key={item.id}>
                {item.title}
              </Dropdown.Item>
            ))
          ) : (
            <p className="text-center m-0">No hay resultados</p>
          )}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

SearchBox.propTypes = {
  autoCompleteItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchBox;
