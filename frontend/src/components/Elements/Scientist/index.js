import React from "react";
import ScientistInput from "../Inputs/ScientistInput";

const Scientist = ({
  name,
  biographicalData,
  livedIn,
  topics,
  biography,
  valueName,
  onChangeName,
  onClickName,
  isClickedName,
  onKeyDownName,
  valueBiographialData,
  onChangeBiographicalData,
  onClickBiographicalData,
  isClickedBiographicalData,
  onKeyDownBiographicalData,
  valueLivedIn,
  onChangeLivedIn,
  onClickLivedIn,
  isClickedLivedIn,
  onKeyDownLivedIn,
  valueTopics,
  onChangeTopics,
  onClickTopics,
  isClickedTopics,
  onKeyDownTopics,
  valueBiography,
  onChangeBiography,
  onClickBiography,
  isClickedBiography,
  onKeyDownBiography,
}) => {
  console.log(name);
  return (
    <div className="scientist">
      <div onClick={onClickName}>
        <div onKeyDown={onKeyDownName} tabIndex="1">
        {!isClickedName ? (
          <div>
            <p>{name}</p>
          </div>
        ) : (
          <ScientistInput value={valueName} onChange={onChangeName} />
        )}
        </div>
      </div>
      <div onClick={onClickBiographicalData} onKeyDown={onKeyDownBiographicalData} tabIndex={0}>
        {!isClickedBiographicalData ? (
          <div>
            <p>{biographicalData}</p>
          </div>
        ) : (
          <ScientistInput
            value={valueBiographialData}
            onChange={onChangeBiographicalData}
          />
        )}
      </div>
      <div onClick={onClickLivedIn} onKeyDown={onKeyDownLivedIn} tabIndex={0}>
        {!isClickedLivedIn ? (
          <div>
            <p>{livedIn}</p>
          </div>
        ) : (
          <ScientistInput value={valueLivedIn} onChange={onChangeLivedIn} />
        )}
      </div>
      <div onClick={onClickTopics} onKeyDown={onKeyDownTopics} tabIndex={0}>
        {!isClickedTopics ? (
          <div>
            <p>{topics}</p>
          </div>
        ) : (
          <ScientistInput value={valueTopics} onChange={onChangeTopics} />
        )}
      </div>
      <div onClick={onClickBiography} onKeyDown={onKeyDownBiography} tabIndex={0}>
        {!isClickedBiography ? (
          <div>
            <p>{biography}</p>
          </div>
        ) : (
          <ScientistInput value={valueBiography} onChange={onChangeBiography} />
        )}
      </div>
    </div>
  );
};

export default Scientist;
