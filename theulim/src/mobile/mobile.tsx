import React from 'react';
import MobileFirst from './sections/first/mobileFirst';
import MobileSecond from './sections/second/mobileSecond';
import DownloadButton from '../components/buttons/downloadButtons/downloadButton';
import SummaryCard from '../components/Summary/SummaryCard';
import MobileThird from './sections/third/mobileThird';
const Mobile = () => {
  return (
    <div>
      <MobileFirst>
        <DownloadButton></DownloadButton>
      </MobileFirst>
      <MobileSecond>
        <SummaryCard></SummaryCard>
      </MobileSecond>
      <MobileThird></MobileThird>
    </div>
  );
};

export default Mobile;
