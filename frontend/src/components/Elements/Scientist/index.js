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
  valueBiographialData,
  onChangeBiographicalData,
  onClickBiographicalData,
  valueLivedIn,
  onChangeLivedIn,
  onClickLivedIn,
  valueTopics,
  onChangeTopics,
  onClickTopics,
  valueBiography,
  onChangeBiography,
  onClickBiography,
}) => {
  return (
    <div className="scientist">
      <div>
        <p>{name}</p>
      </div>
      <ScientistInput value={valueName} onChange={onChangeName} />
      <div>
        <p>{biographicalData}</p>
      </div>
      <ScientistInput
        value={valueBiographialData}
        onChange={onChangeBiographicalData}
      />
      <div>
        <p>{livedIn}</p>
      </div>
      <ScientistInput value={valueLivedIn} onChange={onChangeLivedIn} />
      <div>
        <p>{topics}</p>
      </div>
      <ScientistInput value={valueTopics} onChange={onChangeTopics} />
      <div>
        <p>{biography}</p>
      </div>
      <ScientistInput value={valueBiography} onChange={onChangeBiography} />
    </div>
  );
};

export default Scientist;
