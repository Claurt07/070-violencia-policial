import React from 'react';

import SitesIcon from '../presentational/Icons/Sites.jsx';
import CoverIcon from '../presentational/Icons/Cover.jsx';
import InfoIcon from '../presentational/Icons/Info.jsx';

function BottomActions(props) {
  function renderToggles() {
    return [
      <div key="toggle-sites" className="bottom-action-block">
        {props.features.USE_SITES ? (
          <SitesIcon isActive={props.sites.enabled} onClickHandler={props.sites.toggle} />
        ) : null}
      </div>,
      <div key="toggle-info" className="botttom-action-block">
        <InfoIcon isActive={props.info.enabled} onClickHandler={props.info.toggle} />
      </div>,
      <div key="toggle-cover" className="botttom-action-block">
        {props.features.USE_COVER ? <CoverIcon onClickHandler={props.cover.toggle} /> : null}
      </div>,
    ];
  }

  return <div className="bottom-actions">{renderToggles()}</div>;
}

export default BottomActions;
